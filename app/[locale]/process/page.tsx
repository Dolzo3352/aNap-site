import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Icon, { Wordmark } from "@/components/Icon";
import { GazeRadials, GazeScore } from "@/components/GazeCharts";
import { getContent, isLocale, localeLabel, locales } from "@/content";
import { processText } from "@/content/process";
import data from "@/content/gaze-data.json";

type Cue = { stage: number; obj: string; kind: number; yaw: number; n: number; ok: number; id: string };
const cues = data.cues as Cue[];

const deg = (v: number) => (v > 0 ? "+" : v < 0 ? "−" : "") + Math.abs(Math.round(v)) + "°";
const sum = (a: Cue[], k: "ok" | "n") => a.reduce((s, c) => s + c[k], 0);

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = processText[locale];
  return {
    title: `${t.title} — aNap`,
    description: t.lead,
    alternates: {
      canonical: `/${locale}/process`,
      languages: Object.fromEntries(locales.map((l) => [localeLabel[l].html, `/${l}/process`])),
    },
  };
}

export default async function ProcessPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { ui } = getContent(locale);
  const t = processText[locale];

  // 숫자는 전부 기록에서 계산
  const allYaw = (data.paths as { pts: number[][] }[]).flatMap((p) => p.pts.filter((q) => q[2]).map((q) => q[1]));
  const moving = cues.filter((c) => /이동|도강|횡단|왼쪽멀리|등장/.test(c.id) && c.kind === 1 && c.n);
  const summary = t.summary({
    cues: cues.length,
    lo: deg(Math.min(...allYaw)),
    hi: deg(Math.max(...allYaw)),
    sessions: data.facts.sessions,
    hmd: data.facts.hmd,
    min: data.facts.total_min,
    ok: sum(moving, "ok"),
    n: sum(moving, "n"),
  });

  return (
    <>
      <Nav locale={locale} labels={ui.nav} langMenu={ui.langMenu} processLabel={t.navLabel} subpath="/process" />
      <main className="process">
        <header className="process-head">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 className="process-title">{t.title}</h1>
          <p className="process-lead">{t.lead}</p>
          <p className="process-summary">{summary}</p>
          <p className="process-source">{t.source}</p>
        </header>

        <section className="process-section">
          <h2 className="h2">{t.score.heading}</h2>
          <p className="process-body">{t.score.body}</p>
          <GazeScore locale={locale} />
        </section>

        <section className="process-section">
          <h2 className="h2">{t.radial.heading}</h2>
          <p className="process-body">{t.radial.body}</p>
          <GazeRadials locale={locale} />
        </section>

        <p className="chart-note process-caveat">{t.caveat}</p>

        <p className="process-back">
          <a className="btn btn-sm" href={`/${locale}`}>
            <Icon name="arrow" size={15} className="flip" /> {t.back}
          </a>
        </p>
      </main>

      <footer className="footer">
        <Wordmark height={18} />
        <p>
          © {new Date().getFullYear()} aNap. {ui.rights}
        </p>
      </footer>
    </>
  );
}
