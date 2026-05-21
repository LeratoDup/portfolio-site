import Section from "@/components/Section";
import Tag from "@/components/Tag";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <Section
      title="Projects"
      subtitle="Case study style summaries, focused on automation design, API depth, CI/CD integration, and Azure testing patterns."
    >
      {projects.length === 0 ? (
        <div className="card" style={{ background: "var(--bg-soft)" }}>
          <p className="muted" style={{ margin: 0 }}>
            Projects will be published here from July 2026 as each is completed.
          </p>
        </div>
      ) : (
        <div className="stack">
          {projects.map((p) => (
            <div key={p.slug} className="card">
              <div className="stack">
                <div>
                  <h3 className="h2" style={{ margin: 0 }}>
                    {p.title}
                  </h3>
                  <p className="muted" style={{ marginTop: 8 }}>
                    {p.oneLiner}
                  </p>
                </div>

                <div className="row">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <div className="grid3" style={{ alignItems: "start" }}>
                  <div>
                    <p className="muted" style={{ margin: 0, fontWeight: 600 }}>
                      Tech stack
                    </p>
                    <ul className="list">
                      {p.stack.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="muted" style={{ margin: 0, fontWeight: 600 }}>
                      What I built
                    </p>
                    <ul className="list">
                      {p.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="muted" style={{ margin: 0, fontWeight: 600 }}>
                      CI/CD and outcomes
                    </p>
                    <ul className="list">
                      {p.ciCd.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                    <ul className="list" style={{ marginTop: 10 }}>
                      {p.outcomes.map((o) => (
                        <li key={o}>{o}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="row">
                  {p.repoUrl && (
                    <a
                      className="underline"
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Repository
                    </a>
                  )}
                  {p.demoUrl && (
                    <a
                      className="underline"
                      href={p.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
