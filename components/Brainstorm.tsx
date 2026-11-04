"use client";

import { useRef } from "react";
import { useFollow } from "./useFollow";

/**
 * Contact 하단 — 세 콩이 안경을 쓰고 연필을 든 채 머리를 맞대고 고민하는 장면.
 * 순수 CSS 애니메이션(고개 끄덕임·연필 톡톡·깜빡임·종이에 글 쓰기·말풍선)으로 돌아갑니다.
 */

const BODY =
  "M-19 8 C-22 -3 -17 -14 -8 -17 C0 -21 11 -17 17 -9 C24 0 23 10 16 14 C6 18 -13 16 -19 8Z";

function Glasses() {
  return (
    <g className="bs-glasses" fill="none" stroke="var(--line)" strokeWidth="1.05">
      <circle cx="-6.2" cy="-9.6" r="4.4" fill="rgba(255,255,255,.35)" />
      <circle cx="6.2" cy="-9.6" r="4.4" fill="rgba(255,255,255,.35)" />
      <path d="M-1.8 -9.8q1.8 -1.4 3.6 0" />
      <path d="M-10.6 -10.4l-4.6 -1.6 M10.6 -10.4l4.6 -1.6" />
    </g>
  );
}

function Pencil({ className }: { className?: string }) {
  return (
    <g className={`bs-pencil ${className ?? ""}`} stroke="var(--line)" strokeWidth="1" strokeLinejoin="round">
      <rect x="-1.7" y="-15" width="3.4" height="15" fill="var(--pod)" rx=".4" />
      <path d="M-1.7 0 L0 4.2 L1.7 0Z" fill="var(--body)" />
      <path d="M-.6 2.7 L0 4.2 L.6 2.7Z" fill="var(--line)" stroke="none" />
      <rect x="-1.7" y="-15" width="3.4" height="2.6" fill="var(--blush)" rx=".4" />
    </g>
  );
}

function Pea({
  x,
  y,
  rot,
  scale = 2.4,
  variant,
  pencilRot,
  className,
}: {
  x: number;
  y: number;
  rot: number;
  scale?: number;
  variant: 1 | 2 | 3;
  pencilRot: number;
  className?: string;
}) {
  const arms =
    variant === 1
      ? "M-15 6q-8-7-8-2q-1 6 9 8"
      : variant === 2
        ? "M-15 7q-5-3-6 1q0 5 8 6"
        : "M-18 6q-8 4-7 8q3 4 10 0";
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${scale})`} className={`bs-pea ${className ?? ""}`}>
      <g className="pea-follow">
        <g className="bs-nod" stroke="var(--line)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d={BODY} fill="var(--body)" />
          {/* 왼팔 */}
          <path d={arms} fill="var(--body)" strokeWidth="1.1" />
          {/* 오른팔 + 연필 */}
          <g transform="translate(15 2)">
            <path d="M0 2q7-13 11-8q3 6-6 12" fill="var(--body)" strokeWidth="1.1" />
            <g transform={`translate(7 -4) rotate(${pencilRot})`}>
              <Pencil />
            </g>
          </g>
          <g className="pea-eyes">
            <g className="bs-blink">
              <ellipse cx="-6" cy="-10" rx="1.1" ry="1.8" fill="var(--line)" stroke="none" />
              <ellipse cx="6" cy="-10" rx="1.1" ry="1.8" fill="var(--line)" stroke="none" />
            </g>
          </g>
          <Glasses />
          <path d="M-1.6 -4.6q1.6 1.2 3.2 0" strokeWidth=".85" fill="none" />
          <ellipse cx="-11" cy="-7" rx="2.3" ry="1" fill="var(--blush)" stroke="none" opacity=".58" />
          <ellipse cx="11" cy="-7" rx="2.3" ry="1" fill="var(--blush)" stroke="none" opacity=".58" />
        </g>
      </g>
    </g>
  );
}

export default function Brainstorm({ ariaLabel }: { ariaLabel: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  useFollow(svgRef, { body: 1.2, eyes: 1.4, tilt: 1.5 });

  return (
    <svg
      ref={svgRef}
      className="brainstorm"
      viewBox="0 0 420 230"
      role="img"
      aria-label={ariaLabel}
    >
      {/* 바닥 그림자 */}
      <ellipse cx="210" cy="214" rx="150" ry="9" fill="var(--pod)" opacity=".55" />

      {/* 뒤 가운데 콩 — 위에서 내려다봄 */}
      <Pea x={210} y={112} rot={0} scale={2.25} variant={2} pencilRot={-70} className="bs-pea-c" />
      {/* 왼쪽 콩 — 오른쪽으로 기울어 머리를 맞댐 */}
      <Pea x={118} y={142} rot={16} variant={1} pencilRot={-40} className="bs-pea-a" />
      {/* 오른쪽 콩 — 왼쪽으로 기울어 머리를 맞댐 */}
      <Pea x={302} y={142} rot={-16} variant={3} pencilRot={-55} className="bs-pea-b" />

      {/* 종이 */}
      <g transform="translate(210 198) rotate(-4)">
        <rect x="-58" y="-34" width="116" height="68" rx="3" fill="var(--paper)" stroke="var(--line)" strokeWidth="1.2" />
        <g fill="none" stroke="var(--line)" strokeWidth="1.1" strokeLinecap="round" className="bs-lines">
          <path className="bs-line bs-line-1" d="M-44 -18 C-30 -21 -10 -16 8 -18 S36 -20 44 -17" />
          <path className="bs-line bs-line-2" d="M-44 -4 C-28 -7 -8 -2 10 -4 S30 -6 40 -3" />
          <path className="bs-line bs-line-3" d="M-44 10 C-30 7 -12 12 6 10 S26 8 34 11" />
          <path className="bs-line bs-line-4" d="M-44 24 C-34 21 -22 26 -8 24" />
        </g>
        {/* 지우개 가루 느낌 점 */}
        <circle cx="46" cy="22" r=".9" fill="var(--line)" opacity=".4" />
        <circle cx="50" cy="26" r=".7" fill="var(--line)" opacity=".4" />
      </g>

      {/* 말풍선: ? … ! 순환 */}
      <g transform="translate(300 42)">
      <g className="bs-bubble">
        <path
          d="M-22 -18 C-28 -34 22 -38 30 -22 C38 -8 26 8 6 8 L-6 20 L-4 8 C-20 8 -28 -4 -22 -18Z"
          fill="var(--body)"
          stroke="var(--line)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <g fill="var(--line)" fontFamily="var(--font)" fontWeight="700" fontSize="20" textAnchor="middle" dominantBaseline="central">
          <text className="bs-sym bs-sym-1" x="3" y="-14">
            ?
          </text>
          <text className="bs-sym bs-sym-2" x="3" y="-19">
            …
          </text>
          <text className="bs-sym bs-sym-3" x="3" y="-14">
            !
          </text>
        </g>
      </g>
      </g>
    </svg>
  );
}
