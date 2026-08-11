import Container from "./Container";
import { person } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div
          className="row"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <p className="muted" style={{ margin: 0 }}>
            © {new Date().getFullYear()} {person.name}.
          </p>

          <div className="row">
            <a
              className="linkMuted"
              href={person.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github iconGap"></i>GitHub
            </a>
            <a
              className="linkMuted"
              href={person.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin iconGap"></i>LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
