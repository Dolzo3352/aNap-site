/**
 * 언어와 상관없는 것들 — 링크, 이미지 경로, 연락처.
 * 글은 ko.ts / en.ts / ja.ts 에서 수정하세요.
 */

export const siteMeta = {
  name: "aNap",
  url: "https://anap-site.vercel.app",
  email: "dearbrave1111@gmail.com",
  instagram: "https://www.instagram.com/dearbrave_vr/",
};

export const worksMeta = {
  daydream: {
    link: "https://dear-brave-site.vercel.app",
    hero: "/images/works/daydream/hero.webp",
    stills: [
      "/images/works/daydream/still-02.webp",
      "/images/works/daydream/still-03.webp",
      "/images/works/daydream/experience.webp",
    ],
    poster: "/images/works/daydream/poster.webp",
  },
  maeum: {
    link: "https://maum-hancheop-vr.vercel.app/",
    hero: "/images/works/maeum/hero.webp",
    stills: [
      "/images/works/maeum/still-02.webp",
      "/images/works/maeum/still-03.webp",
      "/images/works/maeum/experience.webp",
    ],
    poster: "/images/works/maeum/poster.webp",
  },
  snowglobe: {
    comingSoon: true as const,
  },
};

/** Works 섹션에 보여줄 순서 */
export const worksOrder = ["daydream", "maeum", "snowglobe"] as const;

export const exhibitionPhotos = [
  "/images/exhibition/overview-01.webp",
  "/images/exhibition/visitor.webp",
  "/images/exhibition/installation.webp",
];
export const spacePlanSrc = "/images/exhibition/space-plan.svg";

/** 팀원 — 순서는 ko/en/ja 의 members 와 같아야 합니다 */
export const membersMeta: { portfolio?: string; character: 1 | 2 | 3 }[] = [
  { portfolio: "#", character: 1 }, // [TODO] 송동호 포트폴리오
  { portfolio: "https://hayunz.github.io/portfolio/", character: 2 },
  { portfolio: "https://jiyunan13.myportfolio.com/", character: 3 },
];
