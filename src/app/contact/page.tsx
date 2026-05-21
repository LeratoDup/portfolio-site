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
            <h3
              className="h2"
              style={{ marginTop: 0, fontSize: "1.05rem" }}
            >
              Let’s connect
            </h3>

            <p className="muted">
              If you need someone who can own automation foundations, strengthen API coverage,
              and embed testing into CI/CD, I’d love to connect.
            </p>

            <div className="stack" style={{ marginTop: 6 }}>
            <a className="block underline" href={person.links.email}>
  <i className="fa-solid fa-envelope icon iconGap"></i>
  Email
</a>

<a className="block underline" href={person.links.linkedin} target="_blank" rel="noreferrer">
  <i className="fa-brands fa-linkedin icon iconGap iconAccent"></i>
  LinkedIn
</a>

<a className="block underline" href={person.links.github} target="_blank" rel="noreferrer">
  <i className="fa-brands fa-github icon iconGap"></i>
  GitHub
</a>

            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
