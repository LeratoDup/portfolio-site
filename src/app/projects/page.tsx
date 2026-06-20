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
            Projects will be published here as each is completed.
          </p>
        </div>
      ) : (
        <div className="stack">
          {projects.map((p) => {
            // ✅ normalize once (fixes TS + simplifies UI)
            const architecture = p.architecture ?? [];
            const ciCd = p.ciCd ?? [];
            const evidence = p.evidence ?? [];

            return (
              <div key={p.slug} className="card">
                <div className="stack">
                  {/* TITLE */}
                  <div>
                    <h3 className="h2" style={{ margin: 0 }}>
                      {p.title}
                    </h3>
                    <p className="muted" style={{ marginTop: 8 }}>
                      {p.oneLiner}
                    </p>
                  </div>

                  {/* TAGS */}
                  <div className="row">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>

                  {/* 3 COLUMN GRID */}
                  <div className="grid3" style={{ alignItems: "start" }}>
                    {/* TECH STACK */}
                    <div>
                      <p
                        className="muted"
                        style={{ margin: 0, fontWeight: 600 }}
                      >
                        Tech stack
                      </p>
                      <ul className="list">
                        {p.stack.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </div>

                    {/* WHAT I BUILT */}
                    <div>
                      <p
                        className="muted"
                        style={{ margin: 0, fontWeight: 600 }}
                      >
                        What I built
                      </p>
                      <ul className="list">
                        {p.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>

                      {/* ARCHITECTURE */}
                      {architecture.length > 0 && (
                        <>
                          <p
                            className="muted"
                            style={{ marginTop: 16, fontWeight: 600 }}
                          >
                            Architecture
                          </p>
                          <ul className="list">
                            {architecture.map((a) => (
                              <li key={a}>{a}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>

                    {/* OUTCOMES */}
                    <div>
                      <p
                        className="muted"
                        style={{ margin: 0, fontWeight: 600 }}
                      >
                        Outcomes
                      </p>
                      <ul className="list">
                        {p.outcomes.map((o) => (
                          <li key={o}>{o}</li>
                        ))}
                      </ul>

                      {/* CI/CD */}
                      {ciCd.length > 0 && (
                        <>
                          <p
                            className="muted"
                            style={{ marginTop: 16, fontWeight: 600 }}
                          >
                            CI/CD Pipeline
                          </p>
                          <ul className="list">
                            {ciCd.map((c) => (
                              <li key={c}>{c}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {/* EVIDENCE */}
                      {evidence.length > 0 && (
                        <>
                          <p
                            className="muted"
                            style={{ marginTop: 16, fontWeight: 600 }}
                          >
                            Evidence
                          </p>
                          <ul className="list">
                            {evidence.map((e) => (
                              <li key={e}>{e}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>

                  {/* LINKS */}
                  <div className="row">
                    {p.links?.repo && (
                      <a
                        className="underline"
                        href={p.links.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Repository
                      </a>
                    )}

                    {p.links?.demo && (
                      <a
                        className="underline"
                        href={p.links.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                      </a>
                    )}

                    {p.links?.ci && (
                      <a
                        className="underline"
                        href={p.links.ci}
                        target="_blank"
                        rel="noreferrer"
                      >
                        CI Pipeline
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Section>
  );
}