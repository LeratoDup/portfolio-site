import type { Project } from "@/lib/data";
import Tag from "./Tag";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card">
      <div className="stack">
        <div>
          <h3 className="h2" style={{ fontSize: "1.05rem" }}>{project.title}</h3>
          <p className="muted" style={{ marginTop: 6 }}>{project.oneLiner}</p>
        </div>

        <div className="row">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="row" style={{ marginTop: 6 }}>
          <a className="underline" href="/projects">
            View details
          </a>
          {project.repoUrl ? (
            <a className="underline" href={project.repoUrl} target="_blank" rel="noreferrer">
              Repo
            </a>
          ) : null}
          {project.demoUrl ? (
            <a className="underline" href={project.demoUrl} target="_blank" rel="noreferrer">
              Demo
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
