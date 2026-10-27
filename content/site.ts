/**
 * aNap 팀 사이트 — 모든 글·링크는 이 파일에서만 수정하면 됩니다.
 * [TODO] 표시는 임시 문구입니다. 실제 글로 바꿔 주세요.
 */

export const site = {
  name: "aNap",
  tagline: "공간 안에서 체험하는 VR 이야기를 만듭니다",
  description:
    "aNap은 VR 콘텐츠를 기획·제작하고, 직접 전시 공간을 운영해 온 3인 스튜디오입니다.",
  url: "https://anap.vercel.app", // [TODO] 배포 후 실제 주소로
  email: "hello@anap.studio", // [TODO]
  instagram: "https://instagram.com/anap.studio", // [TODO]
};

export const about = {
  heading: "우리는 이런 걸 만들어요",
  body: [
    "짧고 밀도 높은 VR 시네마와 인터랙티브 체험을 만듭니다. 헤드셋 안의 이야기뿐 아니라, 헤드셋을 쓰기 전과 벗은 뒤의 공간까지 하나의 경험으로 설계합니다.",
    "뉴콘텐츠아카데미에서 만난 세 사람이 모여, 기획부터 제작·전시 운영까지 직접 해 왔습니다.",
  ],
  strengths: [
    {
      title: "전시를 직접 운영해 봤습니다",
      body: "쇼케이스 부스를 기획·설치하고 관람객 동선과 체험 안내까지 직접 운영했습니다. [TODO: 장소 · 기간 · 관람객 수]",
    },
    {
      title: "공간과 콘텐츠를 함께 설계합니다",
      body: "한지 조형물, 조명, 모니터 미러링 등 공간 연출을 VR 콘텐츠와 한 세트로 구성합니다.",
    },
    {
      title: "기획부터 빌드까지 한 팀에서",
      body: "시나리오, 아트, Unity 개발, 사운드, 전시 운영을 팀 안에서 소화합니다. 외부 협업 시 빠르게 맞출 수 있습니다.",
    },
  ],
};

export type Work = {
  slug: string;
  title: string;
  titleEn?: string;
  year: string;
  format: string;
  logline: string;
  body: string;
  credits?: string;
  history?: string[];
  link?: string; // 작품 사이트
  linkLabel?: string;
  hero?: string;
  stills?: string[];
  poster?: string;
  comingSoon?: boolean;
};

export const works: Work[] = [
  {
    slug: "daydream",
    title: "DayDream",
    titleEn: "Dear Brave",
    year: "2026",
    format: "핸드 트래킹 VR 인터랙티브 시네마 · Meta Quest",
    logline: "신령이 된 당신이, 약초를 찾아 나선 아이의 밤을 지켜봅니다.",
    body:
      "플레이어는 신령이 되어 아픈 어머니를 위해 약초를 찾아 나선 아이의 실수와 불안을 지켜보고, 손짓으로 다시 일어설 용기를 건넵니다. 한지 질감의 세계와 연등이 띄워지는 밤을 손으로 만지듯 체험합니다.",
    history: ["2026 New Content Academy Showcase 출품"],
    link: "https://dear-brave-site.vercel.app",
    linkLabel: "작품 사이트",
    hero: "/images/works/daydream/hero.webp",
    stills: [
      "/images/works/daydream/still-02.webp",
      "/images/works/daydream/still-03.webp",
      "/images/works/daydream/experience.webp",
    ],
    poster: "/images/works/daydream/poster.webp",
  },
  {
    slug: "maeum",
    title: "마음한첩",
    year: "2025",
    format: "VR 시네마 · 로우폴리 애니메이션",
    logline: "아픈 아버지에게 약을 가져다주려 길을 나선 아이, 그리고 반대 방향으로 가는 버스.",
    body:
      "따뜻한 가을빛 로우폴리 마을을 배경으로, 작은 실수와 되돌아오는 길을 그린 짧은 VR 애니메이션입니다. [TODO: 러닝타임 · 상영 이력]",
    link: "https://maum-hancheop-vr.vercel.app/",
    linkLabel: "작품 사이트",
    hero: "/images/works/maeum/hero.webp",
    stills: [
      "/images/works/maeum/still-02.webp",
      "/images/works/maeum/still-03.webp",
      "/images/works/maeum/experience.webp",
    ],
    poster: "/images/works/maeum/poster.webp",
  },
  {
    slug: "snowglobe",
    title: "in the snowglobe",
    titleEn: "하얀 눈이 내려올 때면",
    year: "제작 중",
    format: "MR → VR → MR · 눈사람 만들기 체험",
    logline: "스노우볼 속으로 들어가, 함께 눈사람을 만들고 돌아옵니다.",
    body: "[TODO: 작품 소개 · 이미지 준비 중]",
    comingSoon: true,
  },
];

export const howWeWork = {
  heading: "공간까지 운영합니다",
  body:
    "헤드셋 하나만 놓인 부스가 아니라, 기다리는 사람도 보고 즐길 수 있는 공간을 만듭니다. 조형물·조명·모니터 미러링으로 체험 전후의 흐름을 설계하고, 현장 안내와 장비 관리까지 직접 맡습니다.",
  photos: [
    {
      src: "/images/exhibition/overview-01.webp",
      alt: "쇼케이스 부스 전경 — 한지 조형물과 연등 벽, 체험 중인 관람객",
      caption: "2026 New Content Academy Showcase · 부스 전경",
    },
    {
      src: "/images/exhibition/visitor.webp",
      alt: "헤드셋을 쓰고 손을 뻗어 체험 중인 관람객",
      caption: "핸드 트래킹 체험 · 모니터 미러링으로 대기 관람객도 함께 관람",
    },
    {
      src: "/images/exhibition/installation.webp",
      alt: "체험 스테이션과 조형물 설치 모습",
      caption: "체험 스테이션 · 조형물 · 안내 테이블 구성",
    },
  ],
  plan: {
    src: "/images/exhibition/space-plan.svg",
    caption: "동선 개념도 — 리셉션 → 체험 스테이션 3대 → 디스플레이 → 아웃 (개념도, 실측 도면 아님)",
  },
  stack: [
    "Unity",
    "Meta Quest 3 · 핸드 트래킹",
    "모니터 미러링",
    "조형·조명 연출",
    "현장 운영",
  ],
};

export type Member = {
  name: string;
  role: string;
  bio: string;
  portfolio?: string;
  character: 1 | 2 | 3;
};

export const members: Member[] = [
  {
    name: "송동호",
    role: "기획 · 연출",
    bio: "[TODO] 한 줄 소개",
    portfolio: "#", // [TODO]
    character: 1,
  },
  {
    name: "김하윤",
    role: "[TODO] 역할",
    bio: "[TODO] 한 줄 소개",
    portfolio: "https://kimhayun445.wixsite.com/portfolio",
    character: 2,
  },
  {
    name: "안지윤",
    role: "[TODO] 역할",
    bio: "[TODO] 한 줄 소개",
    portfolio: "https://jiyunan13.myportfolio.com/",
    character: 3,
  },
];

export const contact = {
  heading: "같이 만들어요",
  body: "영화제 배급, 전시 공간·팝업 협업, 커미션 제작 모두 환영합니다.",
};
