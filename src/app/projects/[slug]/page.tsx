import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import Tag from "@/components/Tag";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  const architecture = project.architecture ?? [];
  const evidence = project.evidence ?? [];
  const screenshots = project.screenshots ?? [];

  return (
    <section className="section">
      <Container>
        <Link href="/projects" className="backLink">
          <i className="fa-solid fa-arrow-left"></i> Back to Projects
        </Link>

        <div className="row" style={{ marginBottom: 16, alignItems: "center" }}>
          <Tag>{project.category}</Tag>
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
          {project.status === "in-progress" && (
            <span className="badge badgeProgress">In Progress</span>
          )}
        </div>

        <div
          className="heroGrid"
          style={{ gridTemplateColumns: "1fr", gap: 8 }}
        >
          <h1 className="h1" style={{ margin: 0 }}>
            {project.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradientText">
              {project.title.split(" ").slice(-1)}
            </span>
          </h1>
        </div>

        <p className="heroLead" style={{ marginTop: 14 }}>
          {project.oneLiner}
        </p>

        {project.links?.repo && (
          <div
            className="metaCard"
            style={{ marginTop: 24, marginBottom: 32, width: "fit-content" }}
          >
            <p className="metaLabel">GitHub repository</p>
            <a
              className="underline"
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github iconGap"></i>
              View Source Code
            </a>
          </div>
        )}

        <div className="grid2" style={{ alignItems: "start", gap: 40 }}>
          <div className="stack" style={{ gap: 32 }}>
            <div>
              <p className="eyebrow">The Build</p>
              <h2 className="h2" style={{ marginTop: 12 }}>
                What I built
              </h2>
              <ul className="list" style={{ marginTop: 14 }}>
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>

            {architecture.length > 0 && (
              <div>
                <h2 className="h2" style={{ fontSize: "1.3rem" }}>
                  Architecture
                </h2>
                <ul className="list" style={{ marginTop: 14 }}>
                  {architecture.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.ciCd.length > 0 && (
              <div>
                <h2 className="h2" style={{ fontSize: "1.3rem" }}>
                  CI/CD pipeline
                </h2>
                <ul className="list" style={{ marginTop: 14 }}>
                  {project.ciCd.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h2 className="h2" style={{ fontSize: "1.3rem" }}>
                Outcomes
              </h2>
              <ul className="list" style={{ marginTop: 14 }}>
                {project.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>

            {evidence.length > 0 && (
              <div>
                <h2 className="h2" style={{ fontSize: "1.3rem" }}>
                  Evidence
                </h2>
                <ul className="list" style={{ marginTop: 14 }}>
                  {evidence.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="stack">
            <div className="card">
              <p className="metaLabel">Technologies used</p>
              <div className="row" style={{ marginTop: 10 }}>
                {project.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>

            {project.date && (
              <div className="metaCard">
                <p className="metaLabel">Project date</p>
                <p style={{ margin: 0, fontWeight: 700 }}>{project.date}</p>
              </div>
            )}

            {screenshots.length > 0 && (
              <div className="card">
                <p className="metaLabel">Screenshots</p>
                <div style={{ marginTop: 14 }}>
                  <ScreenshotGallery screenshots={screenshots} />
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
