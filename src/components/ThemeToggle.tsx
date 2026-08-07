"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // Dark is the site's real default (see globals.css), so that's what we
  // assume until the effect below checks whether the anti-flash script in
  // layout.tsx already flipped <html> to light for a returning visitor.
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "light" ? "light" : "dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button className="iconBtn" onClick={toggle} aria-label={label} title={label}>
      <i className={theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
    </button>
  );
}
