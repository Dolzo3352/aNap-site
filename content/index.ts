import ko from "./ko";
import en from "./en";
import ja from "./ja";
import type { Locale, LocaleText, Member, Work } from "./types";
import { exhibitionPhotos, membersMeta, siteMeta, spacePlanSrc, worksMeta, worksOrder } from "./shared";

export type { Locale, Member, Work };

/** 표시 순서: 한 → 영 → 일 */
export const locales: Locale[] = ["ko", "en", "ja"];
export const defaultLocale: Locale = "ko";

export const localeLabel: Record<Locale, { short: string; name: string; html: string; og: string }> = {
  ko: { short: "한", name: "한국어", html: "ko", og: "ko_KR" },
  en: { short: "EN", name: "English", html: "en", og: "en_US" },
  ja: { short: "日", name: "日本語", html: "ja", og: "ja_JP" },
};

const texts: Record<Locale, LocaleText> = { ko, en, ja };

export function isLocale(x: string): x is Locale {
  return (locales as string[]).includes(x);
}

/** 언어별 텍스트 + 공통 메타(링크·이미지)를 합쳐 페이지가 쓰는 모양으로 */
export function getContent(locale: Locale) {
  const t = texts[locale];

  const works: Work[] = worksOrder.map((slug) => {
    const meta = worksMeta[slug] as Partial<Work>;
    return { slug, ...t.works[slug], ...meta };
  });

  const members: Member[] = t.members.map((m, i) => ({ ...m, ...membersMeta[i] }));

  return {
    locale,
    site: { ...siteMeta, ...t.site },
    ui: t.ui,
    about: t.about,
    works,
    howWeWork: {
      heading: t.howWeWork.heading,
      body: t.howWeWork.body,
      photos: exhibitionPhotos.map((src, i) => ({ src, ...t.howWeWork.photos[i] })),
      plan: { src: spacePlanSrc, caption: t.howWeWork.planCaption },
      stack: t.howWeWork.stack,
    },
    members,
    contact: t.contact,
  };
}

export type Content = ReturnType<typeof getContent>;
