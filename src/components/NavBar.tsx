import Link from "next/link";
import { person } from "@/lib/data";

export default function NavBar() {
  return (
    <header className="nav">
      <div className="container navInner">
        <Link href="/" className="linkMuted" style={{ color: "var(--text-primary)", fontWeight: 700 }}>
          {person.name}
        </Link>

       <nav className="navLinks">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/certifications">Certifications</Link>
          <Link href="/resume">Resume</Link>
        </nav>

        <Link href="/contact" className="btnPrimary">
       <i className="fa-regular fa-envelope"></i> Get in touch
        </Link>
      </div>
    </header>
  );
}
