import Section from "@/components/Section";
import { person } from "@/lib/data";

export default function ContactPage() {
  return (
    <Section
      eyebrow="Say hello"
      title={
        <>
          Get in <span className="gradientText">Touch</span>
        </>
      }
      subtitle="Open to SDET, automation, and QA engineering roles — reach out directly using the details below."
    >
      <div className="grid2" style={{ marginTop: 28, alignItems: "stretch" }}>
        <div className="stack" style={{ gap: 20 }}>
          <div className="card">
            <p className="eyebrow">Contact details</p>

            <div style={{ marginTop: 16 }}>
              <p className="metaLabel">Email me</p>
              <a
                className="underline"
                href={person.links.email}
                style={{ fontWeight: 600 }}
              >
                {person.links.email.replace("mailto:", "")}
              </a>
            </div>

            <div style={{ marginTop: 16 }}>
              <p className="metaLabel">Location</p>
              <p style={{ margin: 0, fontWeight: 600 }}>{person.location}</p>
            </div>

            <hr
              className="hrSoft"
              style={{ marginTop: 20, marginBottom: 16 }}
            />

            <p className="eyebrow">Social</p>
            <div className="row" style={{ marginTop: 14 }}>
              <a
                className="iconBtn"
                href={person.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                className="iconBtn"
                href={person.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="card">
            <h3 className="h2" style={{ marginTop: 0, fontSize: "1.05rem" }}>
              Resume
            </h3>
            <p className="muted">
              Prefer a PDF? Grab a copy of my resume for the full breakdown of
              my experience and certifications.
            </p>
            <a
              href="/LeratoDupCv.pdf"
              className="btnPrimary"
              style={{ marginTop: 6, width: "fit-content" }}
              download
            >
              <i className="fa-solid fa-download"></i>
              Download Resume
            </a>
          </div>
        </div>

        <div className="card">
          <p className="eyebrow">Quick FAQ</p>

          <div style={{ marginTop: 16 }}>
            <div className="faqItem">
              <p className="faqQ">What are you currently focused on?</p>
              <p className="faqA">
                Deepening my automation and SDET skill set — CI/CD, containers,
                and Azure — while working toward DevOps.
              </p>
            </div>

            <div className="faqItem">
              <p className="faqQ">
                Where are you based, and are you open to relocation?
              </p>
              <p className="faqA">
                Based in Johannesburg, open to roles in both Johannesburg and
                Pretoria. Not looking to relocate outside Gauteng.
              </p>
            </div>

            <div className="faqItem">
              <p className="faqQ">
                Are you open to remote, hybrid, or on-site roles?
              </p>
              <p className="faqA">Open to fully remote or hybrid roles only.</p>
            </div>

            <div className="faqItem">
              <p className="faqQ">Are you open to contract work?</p>
              <p className="faqA">
                No — I&apos;m looking for permanent, full-time positions only.
              </p>
            </div>

            <div className="faqItem">
              <p className="faqQ">What&apos;s your typical response time?</p>
              <p className="faqA">
                I usually respond to messages within 24–48 business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
