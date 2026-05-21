import Section from "@/components/Section";
import { person } from "@/lib/data";

export default function ResumePage() {
  return (
    <>
      <Section
        title="Resume"
        subtitle="Download my resume, and reach out if you want to talk about my
            experience."
      >
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/LeratoDupCv.pdf"
              className="rounded-2xl bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
              download
            >
              <i className="fa-solid fa-download"></i>
              Download Resume
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
