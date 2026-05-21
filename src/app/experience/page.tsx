import Section from "@/components/Section";
import { experience } from "@/lib/data";

export default function ExperiencePage() {
  return (
    <Section
      title="Experience"
      subtitle="Manual, functional, and automation delivery across consulting and product environments."
    >


      {/* EXPERIENCE LIST */}
      <div  className="card"
  style={{
     marginBottom: 24,
    background: "var(--bg-soft)",
    display: "flex",
    flexDirection: "column",
    gap: 16,
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
