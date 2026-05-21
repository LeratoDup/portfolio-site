import Container from "./Container";
import { person } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="card" style={{ boxShadow: "none" }}>
          <div className="heroGrid" style={{ gridTemplateColumns: "1fr auto", gap: 16 }}>
            <p className="muted">
              © {new Date().getFullYear()} {person.name}
            </p>

            <div className="row" style={{ justifyContent: "flex-end" }}>
              <a className="linkMuted" href={person.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="linkMuted" href={person.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="linkMuted" href={person.links.portfolio} target="_blank" rel="noreferrer">
                Website
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
