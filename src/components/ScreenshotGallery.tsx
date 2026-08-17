"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

type Screenshot = {
  src: string;
  alt: string;
  caption?: string;
};

export default function ScreenshotGallery({
  screenshots,
}: {
  screenshots: Screenshot[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);

  const showPrev = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? i : (i - 1 + screenshots.length) % screenshots.length
    );
  }, [screenshots.length]);

  const showNext = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i + 1) % screenshots.length));
  }, [screenshots.length]);

  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, showPrev, showNext]);

  if (screenshots.length === 0) return null;

  const active = openIndex !== null ? screenshots[openIndex] : null;

  return (
    <>
      <div className="stack" style={{ gap: 20 }}>
        {screenshots.map((s, i) => (
          <figure key={s.src} style={{ margin: 0 }}>
            <button
              type="button"
              className="screenshotThumbBtn"
              onClick={() => setOpenIndex(i)}
              aria-label={`View screenshot full size: ${s.alt}`}
            >
              <Image
                src={s.src}
                alt={s.alt}
                width={1600}
                height={1000}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "block",
                }}
              />
            </button>
            {s.caption && (
              <figcaption
                style={{ marginTop: 10, fontSize: "0.9rem", opacity: 0.75 }}
              >
                {s.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {active &&
        createPortal(
          <div
            className="lightboxOverlay"
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            onClick={close}
          >
            <button
              type="button"
              className="lightboxClose"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            {screenshots.length > 1 && (
              <button
                type="button"
                className="lightboxNav lightboxNavPrev"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                aria-label="Previous screenshot"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            )}

            <div
              className="lightboxContent"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="lightboxImageWrap">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="90vw"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
              {(active.caption || screenshots.length > 1) && (
                <div className="lightboxCaption">
                  <span>{active.caption}</span>
                  {screenshots.length > 1 && (
                    <span className="lightboxCounter">
                      {openIndex! + 1} / {screenshots.length}
                    </span>
                  )}
                </div>
              )}
            </div>

            {screenshots.length > 1 && (
              <button
                type="button"
                className="lightboxNav lightboxNavNext"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                aria-label="Next screenshot"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            )}
          </div>,
          document.body
        )}
    </>
  );
}
