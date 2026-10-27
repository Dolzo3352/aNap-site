"use client";

import { useEffect, type RefObject } from "react";

/**
 * svg 안의 `.pea-follow` 그룹이 마우스를 살짝 따라오게 합니다.
 *  - 몸: 커서 쪽으로 몇 px 기울고 이동 (strength.body)
 *  - 눈(.pea-eyes): 커서 쪽으로 시선 이동 (strength.eyes)
 * 부드럽게 보간하고, prefers-reduced-motion 이면 아무것도 하지 않습니다.
 */
export function useFollow(
  svgRef: RefObject<SVGSVGElement | null>,
  strength: { body: number; eyes: number; tilt: number } = { body: 4, eyes: 1.6, tilt: 4 }
) {
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return; // 터치 기기

    const peas = Array.from(svg.querySelectorAll<SVGGElement>(".pea-follow")).map((el) => ({
      el,
      eyes: el.querySelector<SVGGElement>(".pea-eyes"),
      cur: { x: 0, y: 0 },
      tgt: { x: 0, y: 0 },
    }));
    if (!peas.length) return;

    let px = -1,
      py = -1,
      raf = 0,
      active = false;

    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      if (!active) {
        active = true;
        raf = requestAnimationFrame(tick);
      }
    };
    const onLeave = () => {
      px = -1;
      py = -1;
    };

    const tick = () => {
      let settled = true;
      for (const p of peas) {
        const r = p.el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        if (px < 0) {
          p.tgt.x = 0;
          p.tgt.y = 0;
        } else {
          // 화면 폭/높이 기준 -1~1, 가까울수록 민감하게
          const dx = (px - cx) / (window.innerWidth * 0.45);
          const dy = (py - cy) / (window.innerHeight * 0.45);
          p.tgt.x = Math.max(-1, Math.min(1, dx));
          p.tgt.y = Math.max(-1, Math.min(1, dy));
        }
        p.cur.x += (p.tgt.x - p.cur.x) * 0.08;
        p.cur.y += (p.tgt.y - p.cur.y) * 0.08;
        if (Math.abs(p.tgt.x - p.cur.x) > 0.002 || Math.abs(p.tgt.y - p.cur.y) > 0.002) settled = false;

        const bx = p.cur.x * strength.body;
        const by = p.cur.y * strength.body * 0.45;
        const rot = p.cur.x * strength.tilt;
        p.el.setAttribute("transform", `translate(${bx.toFixed(2)} ${by.toFixed(2)}) rotate(${rot.toFixed(2)})`);
        if (p.eyes) {
          const ex = p.cur.x * strength.eyes;
          const ey = p.cur.y * strength.eyes * 0.7;
          p.eyes.setAttribute("transform", `translate(${ex.toFixed(2)} ${ey.toFixed(2)})`);
        }
      }
      if (settled) {
        active = false;
      } else {
        raf = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [svgRef, strength.body, strength.eyes, strength.tilt]);
}
