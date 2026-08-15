import type { Project } from "@/lib/data";
import Tag from "./Tag";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card">
      <div className="stack">
        <div>
          <div
            className="row"
            style={{
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <p
              className="muted"
              style={{
                margin: 0,
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              {project.category}
            </p>
            {project.status === "in-progress" && (
              <span className="badge badgeProgress">In Progress</span>
            )}
          </div>
          <h3 className="h2" style={{ fontSize: "1.05rem", marginTop: 6 }}>
            {project.title}
          </h3>
          <p className="muted" style={{ marginTop: 6 }}>
            {project.oneLiner}
          </p>
        </div>

        <div className="row">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="row" style={{ marginTop: 6 }}>
          <a className="underline" href={`/projects/${project.slug}`}>
            View details
          </a>
          {project.links?.repo ? (
            <a
              className="underline"
              href={project.links?.repo}
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          ) : null}
          {project.links?.demo ? (
            <a
              className="underline"
              href={project.links?.demo}
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
