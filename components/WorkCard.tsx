import Image from "next/image";
import type { Work } from "@/content";
import Icon from "./Icon";
import { PeaFigure } from "./Pea";

export default function WorkCard({ work, index, newWindow }: { work: Work; index: number; newWindow: string }) {
  const inner = (
    <>
      <div className="work-media">
        {work.comingSoon ? (
          <div className="work-placeholder" aria-hidden="true">
            <svg viewBox="0 0 160 110" className="work-placeholder-pea">
              <ellipse cx="80" cy="84" rx="48" ry="7" fill="var(--pod)" />
              <g transform="translate(80 70) scale(2)">
                <PeaFigure pose="sleep" eyes="closed" variant={2} />
              </g>
              <g fill="none" stroke="var(--line)" strokeWidth="1.3" strokeLinecap="round" className="zzz-static">
                <path d="M100 42h6l-6 7h6" />
                <path d="M109 30h7l-7 8h7" />
              </g>
            </svg>
            <span className="work-placeholder-label">{work.year}</span>
          </div>
        ) : (
          <>
            <Image
              src={work.hero!}
              alt={work.title}
              fill
              sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="work-img work-img-hero"
              priority={index === 0}
            />
            {work.stills?.[0] && (
              <Image
                src={work.stills[0]}
                alt=""
                fill
                sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="work-img work-img-still"
                aria-hidden="true"
              />
            )}
          </>
        )}
        <span className="work-year">{work.year}</span>
      </div>

      <div className="work-text">
        <div className="work-title-row">
          <h3 className="work-title">
            {work.title}
            {work.titleEn && <span className="work-title-en">{work.titleEn}</span>}
          </h3>
          {work.link && !work.comingSoon && (
            <span className="work-link-icon" aria-hidden="true">
              <Icon name="external" size={18} />
            </span>
          )}
        </div>
        <p className="work-format">{work.format}</p>
        <p className="work-logline">{work.logline}</p>
        {work.history && work.history.length > 0 && (
          <ul className="work-history">
            {work.history.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );

  if (work.link && !work.comingSoon) {
    return (
      <a
        className="work-card"
        href={work.link}
        target={work.link.startsWith("http") ? "_blank" : undefined}
        rel={work.link.startsWith("http") ? "noopener noreferrer" : undefined}
        aria-label={`${work.title} — ${work.linkLabel ?? ""} (${newWindow})`}
      >
        {inner}
      </a>
    );
  }
  return <div className="work-card is-static">{inner}</div>;
}
