export type Locale = "ko" | "en" | "ja";

/** 언어별 텍스트 (ko.ts / en.ts / ja.ts 가 이 모양을 따릅니다) */
export type LocaleText = {
  site: {
    tagline: string;
    description: string;
    eyebrow: string;
  };
  ui: {
    nav: { about: string; works: string; space: string; people: string; contact: string };
    scrollDown: string;
    worksHeading: string;
    worksLead: string;
    stackLabel: string;
    peopleHeading: string;
    portfolio: string;
    contactCaption: string;
    planAlt: string;
    podAria: string;
    aboutSceneAria: string;
    aboutSceneLabels: [string, string];
    brainstormAria: string;
    rights: string;
    langMenu: string;
    newWindow: string;
    photo: { open: string; close: string; prev: string; next: string };
  };
  about: {
    heading: string;
    body: string[];
    strengths: { title: string; body: string }[];
  };
  works: Record<
    "daydream" | "maeum" | "snowglobe",
    {
      title: string;
      titleEn?: string;
      year: string;
      format: string;
      logline: string;
      body: string;
      history?: string[];
      linkLabel?: string;
    }
  >;
  howWeWork: {
    heading: string;
    body: string;
    photos: { alt: string; caption: string }[];
    planCaption: string;
    stack: string[];
  };
  members: { name: string; role: string; bio: string }[];
  contact: { heading: string; body: string };
};

export type Work = {
  slug: string;
  title: string;
  titleEn?: string;
  year: string;
  format: string;
  logline: string;
  body: string;
  history?: string[];
  link?: string;
  linkLabel?: string;
  hero?: string;
  stills?: string[];
  poster?: string;
  comingSoon?: boolean;
};

export type Member = {
  name: string;
  role: string;
  bio: string;
  portfolio?: string;
  character: 1 | 2 | 3;
};
