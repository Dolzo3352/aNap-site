"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "./Icon";
import { localeLabel, locales, type Locale } from "@/content";

export default function Nav({
  locale,
  labels,
  langMenu,
}: {
  locale: Locale;
  labels: { about: string; works: string; space: string; people: string; contact: string };
  langMenu: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const links = [
    { href: "#about", label: labels.about },
    { href: "#works", label: labels.works },
    { href: "#space", label: labels.space },
    { href: "#people", label: labels.people },
    { href: "#contact", label: labels.contact },
  ];

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#top" className="nav-brand" aria-label="aNap">
        <Wordmark height={22} />
      </a>
      <div className="nav-right">
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <nav className="lang" aria-label={langMenu}>
          {locales.map((l, i) => (
            <span key={l} className="lang-item">
              {i > 0 && (
                <span className="lang-sep" aria-hidden="true">
                  /
                </span>
              )}
              <a
                href={`/${l}`}
                hrefLang={localeLabel[l].html}
                lang={localeLabel[l].html}
                aria-label={localeLabel[l].name}
                aria-current={l === locale ? "page" : undefined}
                className={l === locale ? "is-current" : ""}
              >
                {localeLabel[l].short}
              </a>
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
}
