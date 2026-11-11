import { GazeRadials, GazeScore } from "./GazeCharts";
import { processText } from "@/content/process";
import type { Locale } from "@/content/types";

/** DayDream 시선 설계와 계측 — 홈(섹션)과 /process(단독 페이지)에서 같이 씁니다 */
export default function ProcessSection({ locale, standalone = false }: { locale: Locale; standalone?: boolean }) {
  const t = processText[locale];
  const Title = standalone ? "h1" : "h2";
  const Sub = standalone ? "h2" : "h3";
  return (
    <>
      <header className="section-head process-head">
        <p className="eyebrow">{t.eyebrow}</p>
        <Title id="process-title" className={standalone ? "process-title" : "h2"}>
          {t.title}
        </Title>
        <p className="section-lead">{t.lead}</p>
      </header>

      <div className="process-block">
        <Sub className="h3">{t.score.heading}</Sub>
        <p className="process-body">{t.score.body}</p>
        <GazeScore locale={locale} />
      </div>

      <div className="process-block">
        <Sub className="h3">{t.radial.heading}</Sub>
        <p className="process-body">{t.radial.body}</p>
        <GazeRadials locale={locale} />
      </div>
    </>
  );
}
