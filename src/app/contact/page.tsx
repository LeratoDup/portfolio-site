import Section from "@/components/Section";
import { person } from "@/lib/data";

export default function ContactPage() {
  return (
    <Section
      title="Contact"
      subtitle="Email is the fastest, LinkedIn works too."
    >
      <div className="grid2">
        <div className="card">
          <div className="stack">
            <h3 className="h2" style={{ marginTop: 0, fontSize: "1.05rem" }}>
              Let's connect
            </h3>

            <p className="muted" style={{ marginTop: 0 }}>
              I'm a Test Engineer transitioning into SDET and cloud-native
              engineering. If you're looking for someone building at the
              intersection of test automation and platform engineering, I'd love
              to connect.
            </p>

            <div className="stack" style={{ marginTop: 6 }}>
              <a
                className="block underline"
                href={person.links.email}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-envelope icon iconGap"></i>
                Email
              </a>

              <a
                className="block underline"
                href={person.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin icon iconGap iconAccent"></i>
                LinkedIn
              </a>

              <a
                className="block underline"
                href={person.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github icon iconGap"></i>
                GitHub
              </a>
            </div>

            <hr
              className="hrSoft"
              style={{ marginTop: 18, marginBottom: 18 }}
            />

            <h3 className="h2" style={{ marginTop: 0, fontSize: "1.05rem" }}>
              Resume
            </h3>

            <a
              href="/LeratoDupCv.pdf"
              className="btnPrimary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                width: "fit-content",
              }}
              download
            >
              <i className="fa-solid fa-download"></i>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
