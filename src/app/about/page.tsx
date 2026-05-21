import Section from "@/components/Section";
import Tag from "@/components/Tag";
import { toolbox } from "@/lib/data";

export default function AboutPage() {
  return (
    <Section
      title="About"
      subtitle="How I approach quality engineering, automation design, and delivery confidence."
    >
      <div className="grid2">
        <div className="card">
          <h3 className="h2" style={{ marginTop: 0, fontSize: "1.05rem" }}>
            Short intro
          </h3>

          <p className="muted" style={{ marginTop: 12 }}>
            I’m a Quality Engineer with a consulting and product background, focused on building automation that teams can trust.
            I enjoy creating clean frameworks, strong API coverage, and CI pipelines that turn quality into a repeatable process.
          </p>

          <hr className="hrSoft" style={{ marginTop: 18, marginBottom: 18 }} />

          <h3 className="h2" style={{ marginTop: 0, fontSize: "1.05rem" }}>
            How I work
          </h3>

          <ul className="list" style={{ marginTop: 12 }}>
            <li>I start with risk-based coverage tied to business value</li>
            <li>I prioritise maintainability, reusable components, and stable test data</li>
            <li>I integrate testing into delivery pipelines so feedback is fast and actionable</li>
          </ul>
        </div>

        <div className="card">
          <h3 className="h2" style={{ marginTop: 0, fontSize: "1.05rem" }}>
            Domains
          </h3>

          <p className="muted" style={{ marginTop: 12 }}>
            Finance and insurance, automotive, banking, chemicals and energy, humanitarian aid, environmental services.
          </p>

          <hr className="hrSoft" style={{ marginTop: 18, marginBottom: 18 }} />

          <h3 className="h2" style={{ marginTop: 0, fontSize: "1.05rem" }}>
            Toolbox
          </h3>

          <div className="row" style={{ marginTop: 12 }}>
            {toolbox.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
