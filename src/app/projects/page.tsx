"use client";

import { useState } from "react";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects, projectCategories } from "@/lib/data";

export default function ProjectsPage() {
  const [active, setActive] = useState<string>("All Projects");

  const filtered =
    active === "All Projects"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <Section
      eyebrow="Portfolio"
      title={
        <>
          Technical <span className="gradientText">Projects</span>
        </>
      }
      subtitle="A showcase of automation frameworks, API test suites, and CI/CD pipelines, built and expanded as each stage of my roadmap towards DevOps is completed."
    >
      <div className="filterRow">
        {["All Projects", ...projectCategories].map((c) => (
          <button
            key={c}
            className={`filterPill ${active === c ? "active" : ""}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="card" style={{ background: "var(--bg-elevated)" }}>
          <p className="muted" style={{ margin: 0 }}>
            No projects in this category yet — more are being added as each
            stage of the upskilling roadmap is completed.
          </p>
        </div>
      ) : (
        <div className="grid3">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      )}
    </Section>
  );
}
