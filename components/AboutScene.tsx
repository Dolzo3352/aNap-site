"use client";

import { useRef } from "react";
import { PeaFigure } from "./Pea";
import { useFollow } from "./useFollow";

/**
 * About 좌측 하단 — 왼쪽: 도면을 들고 고민하는 콩 / 오른쪽: 스토리보드 앞에서 회의하는 두 콩
 * 전부 CSS 애니메이션. 커서도 아주 살짝 따라옴.
 */
export default function AboutScene({
  ariaLabel,
  labels,
}: {
  ariaLabel: string;
  labels: [string, string];
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  useFollow(svgRef, { body: 1, eyes: 1.4, tilt: 1.5 });

  return (
    <svg
      ref={svgRef}
      className="about-scene"
      viewBox="0 0 440 210"
      role="img"
      aria-label={ariaLabel}
    >
      <g stroke="var(--line)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {/* ── 바닥 ── */}
        <ellipse cx="95" cy="178" rx="60" ry="6" fill="var(--pod)" stroke="none" opacity=".55" />
        <ellipse cx="320" cy="178" rx="105" ry="6" fill="var(--pod)" stroke="none" opacity=".55" />

        {/* ───────── 왼쪽: 도면 보는 콩 ───────── */}
        <g transform="translate(95 120)">
          <g className="as-ponder">
            <g className="pea-follow">
              <g transform="scale(2.2)">
                <PeaFigure pose="awake" eyes="open" variant={1} arms={false} />
                {/* 팔 두 개가 도면을 잡음 */}
                <path d="M-16 6q-7-2-8 3q0 4 7 4" fill="var(--body)" strokeWidth="1.1" />
                <path d="M16 6q7-2 8 3q0 4-7 4" fill="var(--body)" strokeWidth="1.1" />
              </g>
              {/* 도면 (살짝 흔들림) */}
              <g transform="translate(0 30)">
                <g className="as-plan">
                  <rect x="-34" y="-20" width="68" height="40" rx="2" fill="var(--paper)" />
                  <g stroke="var(--line)" strokeWidth=".7" opacity=".45">
                    <path d="M-34 -8h68 M-34 4h68 M-34 16h68 M-22 -20v40 M-10 -20v40 M2 -20v40 M14 -20v40 M26 -20v40" />
                  </g>
                  <g fill="none" strokeWidth="1.1">
                    <rect x="-26" y="-12" width="22" height="14" />
                    <rect x="2" y="-12" width="26" height="24" />
                    <circle cx="-15" cy="8" r="4" />
                    <path d="M-30 14 C-20 4 -6 18 10 6" strokeDasharray="2.5 2" />
                  </g>
                </g>
              </g>
            </g>
          </g>
          {/* 물음표 */}
          <g transform="translate(40 -52)">
            <g className="as-q" fill="var(--line)" stroke="none" fontFamily="var(--font)" fontWeight="700" fontSize="15">
              <text x="0" y="0" textAnchor="middle" dominantBaseline="central">
                ?
              </text>
            </g>
          </g>
        </g>

        {/* ───────── 오른쪽: 회의하는 두 콩 ───────── */}
        {/* 스토리보드 이젤 */}
        <g transform="translate(320 92)">
          <path d="M-34 36 L-42 78 M34 36 L42 78 M0 36 L0 78" fill="none" />
          <rect x="-48" y="-44" width="96" height="80" rx="3" fill="var(--paper)" />
          {/* 스토리보드 3컷 */}
          <g fill="none" strokeWidth="1">
            <rect x="-40" y="-36" width="26" height="18" />
            <rect x="-9" y="-36" width="26" height="18" />
            <rect x="22" y="-36" width="18" height="18" />
            <path className="as-sb as-sb-1" d="M-36 -22 q6 -10 10 -3 t8 -4" />
            <path className="as-sb as-sb-2" d="M-5 -24 l6 -6 l6 6 M4 -30 v10" />
            <path className="as-sb as-sb-3" d="M26 -28 h10 M26 -24 h7" />
            <path d="M-40 -8 h50 M-40 0 h70 M-40 8 h40 M-40 16 h62 M-40 24 h30" strokeWidth=".9" opacity=".55" />
          </g>
        </g>

        {/* 왼쪽 콩 (오른쪽을 봄) */}
        <g transform="translate(262 138)">
          <g className="as-talk as-talk-a">
            <g className="pea-follow">
              <g transform="scale(2)">
                <PeaFigure pose="awake" eyes="open" variant={2} />
              </g>
            </g>
          </g>
          {/* 말풍선 A — 작은 재생 삼각형 */}
          <g transform="translate(-30 -58)">
            <g className="as-bubble as-bubble-a">
              <path d="M-16 -12 C-20 -24 16 -26 20 -14 C24 -4 14 4 4 4 L0 12 L-2 4 C-12 4 -18 -2 -16 -12Z" fill="var(--body)" />
              <path d="M-4 -14 L6 -9 L-4 -4Z" fill="var(--line)" stroke="none" />
            </g>
          </g>
        </g>

        {/* 오른쪽 콩 (왼쪽을 봄 — 좌우 반전) */}
        <g transform="translate(378 138) scale(-1 1)">
          <g className="as-talk as-talk-b">
            <g className="pea-follow">
              <g transform="scale(2)">
                <PeaFigure pose="awake" eyes="open" variant={3} />
              </g>
            </g>
          </g>
          <g transform="translate(-30 -58) scale(-1 1)">
            <g className="as-bubble as-bubble-b">
              <path d="M-20 -14 C-24 -26 16 -26 20 -14 C24 -4 14 4 4 4 L0 12 L-2 4 C-12 4 -18 -2 -20 -14Z" fill="var(--body)" />
              <g fill="var(--line)" stroke="none" fontFamily="var(--font)" fontWeight="700" fontSize="14">
                <text x="0" y="-9" textAnchor="middle" dominantBaseline="central">
                  !
                </text>
              </g>
            </g>
          </g>
        </g>
      </g>

      {/* 라벨 */}
      <g fill="var(--muted)" fontFamily="var(--font)" fontSize="10.5" letterSpacing=".04em" textAnchor="middle">
        <text x="95" y="200">{labels[0]}</text>
        <text x="320" y="200">{labels[1]}</text>
      </g>
    </svg>
  );
}
