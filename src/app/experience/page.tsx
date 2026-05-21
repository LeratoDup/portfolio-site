import Section from "@/components/Section";
import { experience } from "@/lib/data";

export default function ExperiencePage() {
  return (
    <Section
      title="Experience"
      subtitle="Manual, functional, and automation delivery across consulting and product environments."
    >
      {/* PROFESSIONAL SUMMARY */}
      <div style={{ marginBottom: 32 }}>
        <h3 className="h2" style={{ fontSize: "1.1rem", marginBottom: 12 }}>
          Professional summary
        </h3>

        <div className="card">
          <p className="muted" style={{ margin: 0 }}>
            Quality Engineer with strong experience across manual, functional, and automated testing.
            Skilled in test planning, test case design, regression and integration testing, and defect
            management, with a proven ability to build and maintain UI and API automation frameworks.
            Experienced in API testing, backend validation, and embedding quality gates into CI/CD pipelines.
            Brings a consulting mindset with strong collaboration skills and a focus on delivering reliable,
            production ready releases.
          </p>
        </div>
      </div>


      {/* EXPERIENCE LIST */}
      <div  className="card"
  style={{
    marginBottom: 24,
    background: "var(--bg-soft)",
  }}>
        {experience.map((e) => (
          <div key={`${e.company}-${e.role}`} className="card">
            <div
              className="heroGrid"
              style={{ gridTemplateColumns: "1fr auto", gap: 10 }}
            >
              <h3
                className="h2"
                style={{ margin: 0, fontSize: "1.05rem" }}
              >
                {e.company}, {e.role}
              </h3>
              <p className="muted" style={{ margin: 0 }}>
                {e.dates}
              </p>
            </div>

            <ul className="list" style={{ marginTop: 14 }}>
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
