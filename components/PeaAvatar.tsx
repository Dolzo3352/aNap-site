"use client";

import { useEffect, useRef, useState } from "react";
import { PeaFigure, type Eyes } from "./Pea";
import { useFollow } from "./useFollow";

/**
 * People 섹션용 프로필 캐릭터.
 *  - 평소: 가만히 있다가 가끔 깜빡이고, 아주 살짝 숨 쉬듯 움직임
 *  - 카드에 마우스가 들어오면: 오른손을 들어 흔듦
 */
export default function PeaAvatar({ variant }: { variant: 1 | 2 | 3 }) {
  const [eyes, setEyes] = useState<Eyes>("open");
  const svgRef = useRef<SVGSVGElement>(null);
  useFollow(svgRef, { body: 2, eyes: 2.2, tilt: 4 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t: number[] = [];
    const blink = () => {
      setEyes("closed");
      t.push(window.setTimeout(() => setEyes("open"), 140));
      t.push(window.setTimeout(blink, 2600 + Math.random() * 3200));
    };
    t.push(window.setTimeout(blink, 800 + variant * 500));
    return () => t.forEach(clearTimeout);
  }, [variant]);

  // 왼팔은 고정, 오른팔은 흔들 수 있게 분리
  const leftArm =
    variant === 1 ? "M-15 6q-8-7-8-2q-1 6 9 8" : variant === 2 ? "M-15 7q-5-3-6 1q0 5 8 6" : "M-18 6q-8 4-7 8q3 4 10 0";
  const rightArmRest =
    variant === 1 ? "M17 4q7-15 11-10q3 7-9 15" : variant === 2 ? "M12 8c1 4 0 13 4 12c5-1 1-11 0-14" : "M17 3q9-10 12-5q2 6-10 13";

  return (
    <svg ref={svgRef} className="avatar" viewBox="0 0 160 160" role="img" aria-hidden="true">
      <ellipse cx="80" cy="118" rx="40" ry="5" fill="var(--pod)" opacity=".6" />
      <g transform="translate(80 86) scale(2.4)">
        <g className="avatar-idle">
          <g className="pea-follow">
            <PeaFigure pose="awake" eyes={eyes} variant={variant} arms={false} />
            <g stroke="var(--line)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" fill="var(--body)">
              <path d={leftArm} />
              {/* 쉬고 있는 오른팔 (호버 시 숨김) */}
              <path className="arm-rest" d={rightArmRest} />
              {/* 흔드는 오른팔 (호버 시 표시) — 어깨(15,2) 기준 회전 */}
              <g transform="translate(15 2)">
                <g className="arm-wave">
                  <path d="M0 2q4-14 11-13q5 2-3 13q-3 3-8 0" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
