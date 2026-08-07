import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Tag from "@/components/Tag";
import ProjectCard from "@/components/ProjectCard";
import { person, toolbox, skillGroups, projects } from "@/lib/data";
import LeratoImg from "@/lib/Images/Lerato caricature.svg";

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <section className="hero">
        <Container>
          <div className="heroGrid heroGridWithAvatar">
            <div>
              <p className="heroKicker">{person.location}</p>

              <h1 className="h1 heroTitle" style={{ lineHeight: 1, margin: 0 }}>
                <span style={{ display: "block", margin: 0, marginBottom: 20 }}>
                  LERATO
                  <br />
                  <span className="gradientText">DU PLESSIS</span>
                </span>
              </h1>

              <p
                className="muted"
                style={{
                  fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                  fontWeight: 600,
                  lineHeight: 1.5,
                  color: "var(--text-primary)",
                }}
              >
                {person.tagline}
              </p>

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

              <div className="row" style={{ marginTop: 26 }}>
                <Link href="/projects" className="btnPrimary">
                  <i className="fa-solid fa-diagram-project"></i>
                  View Projects
                </Link>

                <a
                  href="/Lerato du Plessis cv.pdf"
                  className="btnGhost"
                  download
                >
                  <i className="fa-solid fa-download"></i>
                  Download Resume
                </a>
              </div>
            </div>

            {/* Avatar + floating social icons */}
            <aside className="heroAvatarCol">
              <div className="avatarStage">
                <div className="avatarWrap">
                  <img
                    src={LeratoImg.src}
                    alt="Lerato Du Plessis"
                    className="LeratoImg"
                  />
                </div>

                <a
                  className="iconBtn floatIcon floatIcon-linkedin"
                  href={person.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>

                <a
                  className="iconBtn floatIcon floatIcon-github"
                  href={person.links.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <Section
        eyebrow="Capabilities"
        title={
          <>
            Technical <span className="gradientText">skills</span>
          </>
        }
      >
        <div className="grid4" style={{ marginTop: 24 }}>
          {skillGroups.map((g) => (
            <div key={g.title} className="card">
              <div className={`skillIconBadge tint-${g.tint}`}>
                <i className={g.icon}></i>
              </div>
              <h3 className="h2" style={{ marginTop: 0, fontSize: "1.05rem" }}>
                {g.title}
              </h3>
              <ul className="checkList" style={{ marginTop: 14 }}>
                {g.items.map((i) => (
                  <li key={i}>
                    <i
                      className={`fa-solid fa-circle-check checkIcon tint-${g.tint}`}
                    ></i>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Portfolio"
        title={
          <>
            Featured <span className="gradientText">projects</span>
          </>
        }
        subtitle="Projects will be added here as I complete each stage of my upskilling plan — covering API testing, Playwright automation, backend development, and Azure cloud deployment."
      >
        <div className="grid3" style={{ marginTop: 24 }}>
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <div style={{ marginTop: 24 }}>
          <Link className="btnPrimary" href="/projects">
            See all projects
          </Link>
        </div>
      </Section>

      <Section eyebrow="Explore" title="More">
        <div className="grid2" style={{ marginTop: 24 }}>
          <div
            className="card"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              className="row"
              style={{
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <h3 className="h2" style={{ marginTop: 0, fontSize: "1.05rem" }}>
                Certifications
              </h3>
              <i className="fa-solid fa-certificate cardIcon"></i>
            </div>
            <p className="muted" style={{ flex: 1 }}>
              Industry recognised certifications from ISTQB, Microsoft Azure,
              Leapwork, ACCELQ and Salesforce.
            </p>
            <a className="cardLinkArrow" href="/certifications">
              View all certs <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div
            className="card"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              className="row"
              style={{
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <h3 className="h2" style={{ marginTop: 0, fontSize: "1.05rem" }}>
                Experience
              </h3>
              <i className="fa-solid fa-briefcase cardIcon"></i>
            </div>
            <p className="muted" style={{ flex: 1 }}>
              Consulting and product delivery, manual and automation testing.
            </p>
            <a className="cardLinkArrow" href="/experience">
              Professional journey <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
