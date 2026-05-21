"use client";

import Link from "next/link";
import { person } from "@/lib/data";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <header className="nav">
      <div className="container navInner">
        <Link
          href="/"
          className="linkMuted"
          style={{ color: "var(--text-primary)", fontWeight: 700 }}
          onClick={closeMenu}
        >
          {person.name}
        </Link>

        <nav className="navLinks">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/certifications">Certifications</Link>
        </nav>

        <button 
          className="hamburger" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <Link href="/contact" className="btnPrimary">
          <i className="fa-regular fa-envelope"></i> <span className="btnText">Get in touch</span>
        </Link>
      </div>

      {isOpen && (
        <nav className="mobileMenu">
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/projects" onClick={closeMenu}>Projects</Link>
          <Link href="/experience" onClick={closeMenu}>Experience</Link>
          <Link href="/certifications" onClick={closeMenu}>Certifications</Link>
        </nav>
      )}
    </header>
  );
}
