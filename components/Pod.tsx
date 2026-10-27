"use client";

import { useEffect, useRef, useState } from "react";
import { useFollow } from "./useFollow";
import { PeaFigure, POD_CURL, POD_FRONT, POD_PATH, POD_SEATS, type Eyes } from "./Pea";

type PeaState = { eyes: Eyes; awake: boolean };

const SLEEPING: PeaState = { eyes: "closed", awake: false };

/**
 * 히어로용 콩깍지. 세 명이 자고 있다가
 *  - 가끔 한 명이 실눈을 뜨고 다시 잠들고 (자동)
 *  - 마우스를 올리면 그 콩이 깨어나 고개를 듭니다.
 * prefers-reduced-motion 이면 자동 움직임을 멈춥니다.
 */
export default function Pod({
  awake = false,
  className,
}: {
  /** true면 처음부터 세 명 다 깨어 있음 (Contact 섹션용) */
  awake?: boolean;
  className?: string;
}) {
  const [peas, setPeas] = useState<PeaState[]>(() =>
    awake ? [1, 2, 3].map(() => ({ eyes: "open", awake: true })) : [SLEEPING, SLEEPING, SLEEPING]
  );
  const hovering = useRef<Set<number>>(new Set());
  const reduced = useRef(false);
  const svgRef = useRef<SVGSVGElement>(null);
  useFollow(svgRef, { body: 5, eyes: 1.8, tilt: 5 });

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (awake || reduced.current) return;

    let cancelled = false;
    const timers: number[] = [];
    const later = (fn: () => void, ms: number) => timers.push(window.setTimeout(fn, ms));

    // 한 명이 잠깐 실눈 → 뜸 → 다시 감음
    const peek = () => {
      if (cancelled) return;
      const i = Math.floor(Math.random() * 3);
      if (!hovering.current.has(i)) {
        set(i, { eyes: "half", awake: false });
        later(() => !hovering.current.has(i) && set(i, { eyes: "open", awake: false }), 260);
        later(() => !hovering.current.has(i) && set(i, { eyes: "half", awake: false }), 1400);
        later(() => !hovering.current.has(i) && set(i, SLEEPING), 1650);
      }
      later(peek, 3500 + Math.random() * 4000);
    };
    later(peek, 1800);

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [awake]);

  const set = (i: number, s: PeaState) =>
    setPeas((prev) => prev.map((p, j) => (j === i ? s : p)));

  const onEnter = (i: number) => {
    if (awake) return;
    hovering.current.add(i);
    set(i, { eyes: "open", awake: true });
  };
  const onLeave = (i: number) => {
    if (awake) return;
    hovering.current.delete(i);
    set(i, { eyes: "half", awake: false });
    window.setTimeout(() => !hovering.current.has(i) && set(i, SLEEPING), 350);
  };


  return (
    <svg
      ref={svgRef}
      className={`pod ${className ?? ""}`}
      viewBox="0 0 981 216"
      role="img"
      aria-label="콩깍지 안에서 낮잠 자는 세 콩 — aNap"
    >
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d={POD_PATH} fill="var(--pod)" stroke="none" />
        <path d={POD_PATH} fill="none" stroke="var(--line)" strokeWidth="1.3" />
        <path d={POD_CURL} fill="none" stroke="var(--line)" strokeWidth="1.3" />

        {peas.map((p, i) => {
          const variant = (i + 1) as 1 | 2 | 3;
          return (
            <g
              key={i}
              className={`pea pea-${variant} ${p.awake ? "is-awake" : ""}`}
              transform={`translate(${POD_SEATS[i]} 113)`}
              onMouseEnter={() => onEnter(i)}
              onMouseLeave={() => onLeave(i)}
              onFocus={() => onEnter(i)}
              onBlur={() => onLeave(i)}
              tabIndex={awake ? -1 : 0}
              style={{ cursor: awake ? "default" : "pointer", outline: "none" }}
            >
              {/* 터치 영역 */}
              <circle r="30" cy="-2" fill="transparent" stroke="none" />
              <g className="pea-follow">
                <g className="pea-body">
                  <PeaFigure
                    pose={p.awake ? "awake" : "sleep"}
                    eyes={p.eyes}
                    variant={variant}
                  />
                </g>
              </g>
            </g>
          );
        })}

        <path d={POD_FRONT} fill="none" stroke="var(--line)" strokeWidth="1" />

        {/* zzz — 가운데는 크게, 양옆은 작게. 그 콩이 깨면 사라짐 */}
        {!awake &&
          peas.map((p, i) => (
            <Zzz
              key={`z${i}`}
              x={POD_SEATS[i] + (i === 1 ? 26 : 22)}
              y={i === 1 ? 62 : 90}
              scale={i === 1 ? 1.5 : 0.5}
              delay={i * 1.1}
              hidden={p.awake}
            />
          ))}
      </g>
    </svg>
  );
}

function Zzz({
  x,
  y,
  scale,
  delay,
  hidden,
}: {
  x: number;
  y: number;
  scale: number;
  delay: number;
  hidden: boolean;
}) {
  return (
    <g
      className={`zzz ${hidden ? "is-hidden" : ""}`}
      transform={`translate(${x} ${y}) scale(${scale})`}
      fill="none"
      stroke="var(--line)"
      strokeWidth={scale < 1 ? 2.2 : 1.4}
      style={{ ["--zd" as string]: `${delay}s` }}
    >
      <g transform="translate(0 12)">
        <path className="z z1" d="M0 0h7l-7 8h7" />
      </g>
      <g transform="translate(13 0) scale(.85)">
        <path className="z z2" d="M0 0h8L0 10h8" />
      </g>
      <g transform="translate(26 -12) scale(.7)">
        <path className="z z3" d="M0 0h9L0 12h9" />
      </g>
    </g>
  );
}
