"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { person } from "@/lib/data";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/certifications", label: "Certifications" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="nav">
      <div className="container navInner">
        <Link
          href="/"
          className="linkMuted"
          style={{ color: "var(--text-primary)", fontWeight: 800, letterSpacing: "-0.01em" }}
          onClick={closeMenu}
        >
          {person.name}
        </Link>

        <nav className="navLinks">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={isActive(l.href) ? "active" : ""}>
              {l.label}
            </Link>
          ))}
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

        <div className="navActions">
          <ThemeToggle />
          <Link href="/contact" className="btnPrimary">
            <i className="fa-regular fa-envelope"></i> <span className="btnText">Get in touch</span>
          </Link>
        </div>
      </div>

      {isOpen && (
        <nav className="mobileMenu">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={closeMenu}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
