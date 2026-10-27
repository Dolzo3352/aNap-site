"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "./Icon";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#works", label: "Works" },
  { href: "#space", label: "Space" },
  { href: "#people", label: "People" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#top" className="nav-brand" aria-label="aNap 홈">
        <Wordmark height={22} />
      </a>
      <nav className="nav-links" aria-label="주요 메뉴">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
