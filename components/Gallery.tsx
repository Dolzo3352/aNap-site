"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";

export type Shot = { src: string; w: number; h: number; alt: string; caption: string; plan?: boolean };

/**
 * 전시 사진 갤러리. 첫 장은 가로 전체, 나머지는 비율만큼 폭을 나눠 한 줄에.
 * 사진을 누르면 크게 보기(좌우 화살표·Esc·바깥 클릭으로 닫기).
 */
export default function Gallery({ shots, labels }: { shots: Shot[]; labels: { open: string; close: string; prev: string; next: string } }) {
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const go = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + shots.length) % shots.length)), [shots.length]);

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (open !== null && !el.open) el.showModal();
    if (open === null && el.open) el.close();
  }, [open]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  const thumb = (s: Shot, i: number, sizes: string) => (
    <button type="button" className="shot-btn" onClick={() => setOpen(i)} aria-label={`${s.caption} — ${labels.open}`}>
      {s.plan ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={s.src} alt={s.alt} width={s.w} height={s.h} className="shot-img shot-plan" />
      ) : (
        <Image src={s.src} alt={s.alt} width={s.w} height={s.h} sizes={sizes} className="shot-img" />
      )}
    </button>
  );

  const cur = open === null ? null : shots[open];

  return (
    <>
      <div className="gallery">
        <Reveal as="div" className="shot shot-wide">
          <figure>
            {thumb(shots[0], 0, "(max-width: 1200px) 100vw, 1010px")}
            <figcaption>{shots[0].caption}</figcaption>
          </figure>
        </Reveal>
        <div className="gallery-row">
          {shots.slice(1).map((s, i) => (
            <Reveal key={s.src} as="div" className="shot" delay={(i + 1) * 80}>
              <figure style={{ flexGrow: s.w / s.h }}>
                {thumb(s, i + 1, "(max-width: 760px) 100vw, 40vw")}
                <figcaption>{s.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      <dialog
        ref={dialog}
        className="lightbox"
        onClose={() => setOpen(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(null);
        }}
      >
        {cur && (
          <div className="lightbox-inner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cur.src} alt={cur.alt} className={`lightbox-img ${cur.plan ? "shot-plan" : ""}`} />
            <p className="lightbox-caption">{cur.caption}</p>
            <button type="button" className="lightbox-btn lightbox-close" onClick={() => setOpen(null)} aria-label={labels.close}>
              <Icon name="close" size={20} />
            </button>
            <button type="button" className="lightbox-btn lightbox-prev" onClick={() => go(-1)} aria-label={labels.prev}>
              <Icon name="arrow" size={20} className="flip" />
            </button>
            <button type="button" className="lightbox-btn lightbox-next" onClick={() => go(1)} aria-label={labels.next}>
              <Icon name="arrow" size={20} />
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}
