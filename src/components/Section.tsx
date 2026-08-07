import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
};

export default function Section({ eyebrow, title, subtitle, children }: Props) {
  return (
    <section className="section">
      <div className="container">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="h2" style={{ marginTop: eyebrow ? 12 : 0 }}>
          {title}
        </h2>
        {subtitle ? (
          <p className="muted" style={{ maxWidth: "60ch", fontSize: "0.98rem" }}>
            {subtitle}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
