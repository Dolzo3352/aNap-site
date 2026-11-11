import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Icon, { Divider, Wordmark } from "@/components/Icon";
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
  const front = cues.filter((c) => Math.abs(c.yaw) <= 30 && c.n);
  const side = cues.filter((c) => Math.abs(c.yaw) > 30 && c.n);
  const low = cues.filter((c) => c.n >= 2 && c.ok / c.n <= 0.5);

  const tiles: [string, string][] = [
    [`${cues.length}${t.cuesUnit}`, t.tiles.cues],
    [`${deg(Math.min(...allYaw))} ~ ${deg(Math.max(...allYaw))}`, t.tiles.range],
    [
      `${data.facts.sessions}${t.sessionsUnit}`,
      t.tiles.sessions.replace("{hmd}", String(data.facts.hmd)).replace("{min}", String(data.facts.total_min)),
    ],
    [`${sum(moving, "ok")}/${sum(moving, "n")}`, t.tiles.follow],
  ];

  return (
    <>
      <Nav locale={locale} labels={ui.nav} langMenu={ui.langMenu} processLabel={t.navLabel} subpath="/process" />
      <main className="process">
        <header className="process-head">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 className="process-title">{t.title}</h1>
          <p className="process-lead">{t.lead}</p>
          <p className="process-source">{t.source}</p>
        </header>

        <ul className="tiles">
          {tiles.map(([n, label]) => (
            <li key={label} className="tile">
              <b>{n}</b>
              <span>{label}</span>
            </li>
          ))}
        </ul>

        <ol className="steps">
          {t.steps.map((s) => (
            <li key={s.label} className="step">
              <small>{s.label}</small>
              <b>{s.head}</b>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>

        <Divider className="section-divider" />

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

        <Divider className="section-divider" />

        <section className="process-section">
          <h2 className="h2">{t.findings.heading}</h2>
          <div className="compare">
            <div className="compare-item">
              <b>
                {sum(front, "ok")}/{sum(front, "n")}
              </b>
              <span>{t.findings.front(sum(front, "ok"), sum(front, "n"))}</span>
            </div>
            <div className="compare-item">
              <b>
                {sum(side, "ok")}/{sum(side, "n")}
              </b>
              <span>{t.findings.side(sum(side, "ok"), sum(side, "n"))}</span>
            </div>
          </div>
          <p className="process-body">{t.findings.body}</p>
          <div className="chart-scroll">
            <table className="cue-table">
              <thead>
                <tr>
                  {t.findings.tableHead.map((h, i) => (
                    <th key={h} className={i >= 2 ? "num" : ""}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {low.map((c, i) => (
                  <tr key={i}>
                    <td>{t.stages[c.stage]}</td>
                    <td>{(c.id === "stage_start" ? `${t.first} · ` : "") + t.objects[c.obj]}</td>
                    <td className="num">{deg(c.yaw)}</td>
                    <td className="num">
                      {c.ok}/{c.n}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="process-body">{t.findings.after}</p>
          <p className="chart-note">{t.caveat}</p>
        </section>

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
