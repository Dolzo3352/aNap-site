"use client";

import { useState } from "react";
import data from "@/content/gaze-data.json";
import { processText } from "@/content/process";
import type { Locale } from "@/content/types";

type Cue = { stage: number; t: number; dur: number; obj: string; kind: number; yaw: number; n: number; ok: number; react: number | null; id: string };
type Path = { stage: number; obj: string; kind: number; pts: number[][] };

const cues = data.cues as Cue[];
const paths = data.paths as Path[];
const stageLen = data.facts.stage_len as Record<string, number>;

const COLOR: Record<number, string> = { 1: "var(--line)", 2: "var(--c-bubble)", 3: "var(--c-hand)" };
const deg = (v: number) => (v > 0 ? "+" : v < 0 ? "−" : "") + Math.abs(Math.round(v)) + "°";

/** 1. 시선 악보 — 스테이지별 타임라인 × 방향 */
export function GazeScore({ locale }: { locale: Locale }) {
  const t = processText[locale];
  const [stage, setStage] = useState(3);
  const stages = [0, 1, 2, 3, 4];

  const W = 960, H = 400, m = { l: 92, r: 150, t: 14, b: 34 };
  const len = stageLen[String(stage)];
  const x = (s: number) => m.l + ((W - m.l - m.r) * s) / len;
  const y = (a: number) => m.t + ((H - m.t - m.b) * (180 - a)) / 360;

  const lines = paths
    .filter((p) => p.stage === stage)
    .map((p) => {
      let d = "", pen = false, last: number[] | null = null, prev: number[] | null = null;
      for (const q of p.pts) {
        const jump = prev && Math.abs(q[1] - prev[1]) > 180;
        if (q[2]) {
          d += (pen && !jump ? "L" : "M") + x(q[0]).toFixed(1) + " " + y(q[1]).toFixed(1);
          pen = true;
          last = q;
        } else pen = false;
        prev = q;
      }
      return last ? { d, obj: p.obj, kind: p.kind, endY: y(last[1]) } : null;
    })
    .filter((v): v is { d: string; obj: string; kind: number; endY: number } => v !== null);

  // 오른쪽 끝 라벨이 겹치지 않게 벌림
  const labels = [...lines].sort((a, b) => a.endY - b.endY).map((l) => ({ ...l }));
  for (let i = 1; i < labels.length; i++) if (labels[i].endY - labels[i - 1].endY < 15) labels[i].endY = labels[i - 1].endY + 15;

  const cs = cues.filter((c) => c.stage === stage);
  const off = cs.filter((c) => Math.abs(c.yaw) > 30).length;
  const step = len > 120 ? 30 : len > 60 ? 15 : 10;
  const ticks: number[] = [];
  for (let s = 0; s <= len; s += step) ticks.push(s);
  const rows: [number, string][] = [
    [180, `${t.axis.back} 180°`],
    [90, `${t.axis.right} +90°`],
    [0, `${t.axis.front} 0°`],
    [-90, `${t.axis.left} −90°`],
    [-180, `${t.axis.back} −180°`],
  ];

  return (
    <div className="chart-card">
      <div className="chart-tabs" role="tablist">
        {stages.map((s) => (
          <button key={s} role="tab" aria-selected={s === stage} onClick={() => setStage(s)}>
            {t.stages[s]}
          </button>
        ))}
      </div>
      <ul className="chart-legend">
        <li><i style={{ background: COLOR[1] }} />{t.legend.child}</li>
        <li><i style={{ background: COLOR[2] }} />{t.legend.bubble}</li>
        <li><i style={{ background: COLOR[3] }} />{t.legend.hand}</li>
        <li><i className="dot" />{t.legend.cue}</li>
        <li><i className="band" />{t.legend.band}</li>
      </ul>
      <div className="chart-scroll">
        <svg viewBox={`0 0 ${W} ${H}`} className="chart-svg" style={{ minWidth: 680 }} role="img" aria-label={`${t.score.heading} — ${t.stages[stage]}`}>
          <rect x={m.l} y={y(30)} width={W - m.l - m.r} height={y(-30) - y(30)} fill="var(--c-band)" />
          {rows.map(([a, label]) => (
            <g key={a}>
              <line x1={m.l} x2={W - m.r} y1={y(a)} y2={y(a)} stroke="var(--c-grid)" />
              <text x={m.l - 10} y={y(a) + 4} textAnchor="end">{label}</text>
            </g>
          ))}
          {ticks.map((s) => (
            <text key={s} x={x(s)} y={H - 12} textAnchor="middle" className="muted">
              {s}{t.axis.sec}
            </text>
          ))}
          {lines.map((l, i) => (
            <path key={i} d={l.d} fill="none" stroke={COLOR[l.kind]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          ))}
          {labels.map((l, i) => (
            <g key={i}>
              <circle cx={W - m.r + 12} cy={l.endY} r="4" fill={COLOR[l.kind]} />
              <text x={W - m.r + 21} y={l.endY + 4}>{t.objects[l.obj]}</text>
            </g>
          ))}
          {cs.map((c, i) => (
            <g key={i}>
              <line x1={x(c.t)} x2={x(Math.min(len, c.t + c.dur))} y1={y(c.yaw)} y2={y(c.yaw)} stroke="var(--ink)" strokeWidth="5" strokeLinecap="round" opacity=".2" />
              <circle cx={x(c.t)} cy={y(c.yaw)} r="5" fill="var(--ink)" stroke="var(--paper)" strokeWidth="2" />
              <circle cx={x(c.t)} cy={y(c.yaw)} r="13" fill="transparent">
                <title>{`${c.t}${t.axis.sec} · ${t.objects[c.obj]} · ${deg(c.yaw)}${c.n ? " · " + t.cueTip(c.ok, c.n, c.react) : ""}`}</title>
              </circle>
            </g>
          ))}
        </svg>
      </div>
      <p className="chart-note">{t.score.note(Math.round(len), cs.length, off)}</p>
    </div>
  );
}

/** 2. 머리가 실제로 향한 방향 — 스테이지별 방사형 분포 */
export function GazeRadials({ locale }: { locale: Locale }) {
  const t = processText[locale];
  const yaw = data.yaw as number[][];
  const seconds = data.yawSeconds as Record<string, number>;
  const stages = [...new Set(yaw.map((r) => r[0]))].sort();
  const cx = 150, cy = 150, r0 = 44, r1 = 100;
  const P = (a: number, r: number) => [cx + r * Math.sin((a * Math.PI) / 180), cy - r * Math.cos((a * Math.PI) / 180)];
  const f = (p: number[]) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`;

  return (
    <div className="chart-card">
      <div className="radials">
        {stages.map((s) => {
          const rows = yaw.filter((r) => r[0] === s);
          const mx = Math.max(...rows.map((r) => r[2]));
          const ticks = [...new Set(cues.filter((c) => c.stage === s).map((c) => Math.round(c.yaw)))];
          return (
            <svg key={s} viewBox="0 0 300 300" className="chart-svg" role="img" aria-label={t.stages[s]}>
              <text x={cx} y="16" textAnchor="middle" className="strong">{t.stages[s]}</text>
              <text x={cx} y="32" textAnchor="middle" className="muted">{t.radial.recorded(Math.round(seconds[String(s)]))}</text>
              {rows.map((r, i) => {
                const a0 = r[1] + 0.7, a1 = r[1] + 14.3;
                const A = P(a0, r0), B = P(a0, r1), C = P(a1, r1), D = P(a1, r0);
                return (
                  <path
                    key={i}
                    d={`M${f(A)}L${f(B)}A${r1} ${r1} 0 0 1 ${f(C)}L${f(D)}A${r0} ${r0} 0 0 0 ${f(A)}Z`}
                    fill="var(--c-hand)"
                    fillOpacity={r[2] > 0 ? (0.14 + 0.86 * Math.sqrt(r[2] / mx)).toFixed(2) : 0.05}
                  >
                    <title>{`${deg(r[1])} ~ ${deg(r[1] + 15)} · ${r[2]}%`}</title>
                  </path>
                );
              })}
              {ticks.map((a) => {
                const A = P(a, r1 + 5), B = P(a, r1 + 14);
                return <line key={a} x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />;
              })}
              <circle cx={cx} cy={cy} r="5" fill="var(--muted)" />
              <path d={`M${cx - 5} ${cy - 9}L${cx} ${cy - 18}L${cx + 5} ${cy - 9}Z`} fill="var(--muted)" />
              <text x={cx} y={cy + r1 + 32} textAnchor="middle" className="muted">{t.axis.back}</text>
              <text x={cx + r1 + 20} y={cy + 4} className="muted">{t.axis.right}</text>
              <text x={cx - r1 - 20} y={cy + 4} textAnchor="end" className="muted">{t.axis.left}</text>
            </svg>
          );
        })}
      </div>
      <p className="chart-note">{t.radial.note}</p>
    </div>
  );
}
