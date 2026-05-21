import Container from "@/components/Container";
import Section from "@/components/Section";
import Tag from "@/components/Tag";
import ProjectCard from "@/components/ProjectCard";
import {
  person,
  toolbox,
  certifications,
  skillGroups,
  projects,
  experience,
} from "@/lib/data";
import LeratoImg from "@/lib/Images/Lerato caricature.svg";

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <section className="hero">
        <Container>
          <div className="heroGrid heroGridWithAvatar">
            {/* LEFT: Avatar + social icons */}
            <aside className="heroAvatarCol">
              <div className="avatarWrap">
                <img
                  src={LeratoImg.src}
                  alt="Lerato Du Plessis"
                  className="LeratoImg"
                />
              </div>

              <div className="socialRow">
                <a
                  className="iconBtn"
                  href={person.links.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fa-brands fa-github"></i>
                </a>

                <a
                  className="iconBtn"
                  href={person.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </aside>

            {/* RIGHT: Existing hero content (unchanged) */}
            <div>
              <p className="heroKicker">{person.location}</p>

              <h1 className="h1 heroTitle" style={{ lineHeight: 1, margin: 0 }}>
                <span style={{ display: "block", margin: 0, marginBottom: 20 }}>
                  {person.name}
                </span>
                <span
                  className="muted"
                  style={{
                    fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                    fontWeight: 500,
                    lineHeight: 1.5,
                    display: "block",
                    margin: 0,
                  }}
                >
                  {person.tagline}
                </span>
              </h1>

              <p className="heroLead">
                I execute structured test coverage across API, functional, and
                integration layers — validating backend systems with Postman,
                Newman, and SQL, and embedding quality into delivery pipelines.
                Currently building toward cloud-native SDET and platform
                engineering.
              </p>

              <div className="row" style={{ marginTop: 18 }}>
                {toolbox.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <div className="row" style={{ marginTop: 22 }}>
                <a href="/projects" className="btnGhost">
                  <i className="fa-solid fa-diagram-project icon iconGap"></i>
                  View Projects
                </a>

                <a
                  href="/Lerato du Plessis cv.pdf"
                  className="btnGhost"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    width: "fit-content",
                  }}
                  download
                >
                  <i className="fa-solid fa-download"></i>
                  Download Resume
                </a>
                {/* 
                <a href="/contact" className="btnGhost">
                  <i className="fa-solid fa-envelope icon iconGap"></i>
                  Contact Me
                </a> */}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section title="Technical skills">
        <div className="grid2">
          {skillGroups.map((g) => (
            <div key={g.title} className="card">
              <h3 className="h2" style={{ marginTop: 0 }}>
                {g.title}
              </h3>
              <ul className="list">
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Featured projects"
        subtitle="Projects will be added here as I complete each stage of my upskilling plan — covering API testing, Playwright automation, backend development, and Azure cloud deployment."
        // subtitle="A snapshot of the kind of automation and quality engineering work I build and maintain."
      >
        <div className="grid3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <div style={{ marginTop: 18 }}>
          <a className="btnPrimary" href="/projects">
            See all projects
          </a>
        </div>
      </Section>

      <Section title="More">
        <div className="grid2">
          <div className="card">
            <h3 className="h2" style={{ marginTop: 0, fontSize: "1.05rem" }}>
              Certifications
            </h3>
            <p className="muted">
              Industry recognised certifications from ISTQB, Leapwork, ACCELQ
              and Salesforce.
            </p>
            <a className="underline" href="/certifications">
              View certifications
            </a>
          </div>

          <div className="card">
            <h3 className="h2" style={{ marginTop: 0, fontSize: "1.05rem" }}>
              Experience
            </h3>
            <p className="muted">
              Consulting and product delivery, manual and automation testing.
            </p>
            <a className="underline" href="/experience">
              View experience
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
