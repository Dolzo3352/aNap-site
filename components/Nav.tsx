"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "./Icon";
import { localeLabel, locales, type Locale } from "@/content";

export default function Nav({
  locale,
  labels,
  langMenu,
  processLabel,
  subpath = "",
}: {
  locale: Locale;
  labels: { about: string; works: string; space: string; people: string; contact: string };
  langMenu: string;
  processLabel: string;
  /** 홈이 아닌 페이지에서는 "/process" 처럼 넘깁니다 */
  subpath?: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // 홈에서는 같은 페이지 안 이동(#about), 다른 페이지에서는 홈의 해당 섹션으로
  const base = subpath ? `/${locale}` : "";
  const links = [
    { href: `${base}#about`, label: labels.about },
    { href: `${base}#works`, label: labels.works },
    { href: `${base}#space`, label: labels.space },
    { href: `${base}#people`, label: labels.people },
    { href: `${base}#contact`, label: labels.contact },
  ];

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <a href={subpath ? `/${locale}` : "#top"} className="nav-brand" aria-label="aNap">
        <Wordmark height={22} />
      </a>
      <div className="nav-right">
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a
            href={`/${locale}/process`}
            aria-current={subpath === "/process" ? "page" : undefined}
            className={subpath === "/process" ? "is-current" : ""}
          >
            {processLabel}
          </a>
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
                href={`/${l}${subpath}`}
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
