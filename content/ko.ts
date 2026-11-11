import type { LocaleText } from "./types";

/** 한국어 */
const ko: LocaleText = {
  site: {
    tagline: "공간 안에서 체험하는 VR 이야기를 만듭니다",
    description: "aNap은 VR 콘텐츠를 기획·제작하고, 직접 전시 공간을 운영해 온 3인 스튜디오입니다.",
    eyebrow: "An Immersive Story Studio",
  },
  ui: {
    nav: { about: "About", works: "Works", space: "Space", people: "People", contact: "Contact" },
    scrollDown: "아래로 스크롤",
    worksHeading: "만든 것들",
    worksLead: "카드를 누르면 작품 사이트로 이동합니다.",
    stackLabel: "함께 쓰는 것들",
    peopleHeading: "팀원 소개",
    portfolio: "포트폴리오",
    contactCaption: "이야기를 만드는 중",
    planAlt: "전시 공간 동선 개념도",
    podAria: "콩깍지 안에서 낮잠 자는 세 콩 — aNap",
    aboutSceneAria: "도면을 보며 고민하는 콩과 스토리보드 앞에서 회의하는 두 콩",
    aboutSceneLabels: ["공간 도면", "콘텐츠 회의"],
    brainstormAria: "세 콩이 안경을 쓰고 연필을 든 채 머리를 맞대고 이야기를 구상하는 모습",
    rights: "All rights reserved.",
    langMenu: "언어 선택",
    newWindow: "새 창",
  },
  about: {
    heading: "우리는 이런 걸 만들어요",
    body: [
      "짧고 밀도 높은 VR 시네마와 인터랙티브 체험을 만듭니다. 헤드셋을 쓰기 전과 벗은 뒤의 공간까지, 안의 이야기와 하나의 경험으로 설계합니다.",
      "뉴콘텐츠아카데미에서 만난 세 사람이 모여, 기획부터 제작·전시 운영까지 직접 해 왔습니다.",
    ],
    strengths: [
      {
        title: "전시를 직접 운영해 봤습니다",
        body: "2026 New Content Academy Showcase 부스를 기획·설치하고, 관람객 동선과 체험 안내까지 직접 운영했습니다.",
      },
      {
        title: "공간과 콘텐츠를 함께 설계합니다",
        body: "한지 조형물, 조명, 모니터 미러링 등 공간 연출을 VR 콘텐츠와 한 세트로 구성합니다.",
      },
      {
        title: "기획부터 빌드까지 한 팀에서",
        body: "시나리오, 아트, Unity 개발, 사운드, 전시 운영을 팀 안에서 소화합니다. 외부와 협업할 때 조율이 빠릅니다.",
      },
    ],
  },
  works: {
    daydream: {
      title: "DayDream",
      titleEn: "Dear Brave",
      year: "2026",
      format: "핸드 트래킹 VR 인터랙티브 시네마 · Meta Quest",
      logline: "신령이 된 당신이, 약초를 찾아 나선 아이의 밤을 지켜봅니다.",
      body: "플레이어는 신령이 되어 아픈 어머니를 위해 약초를 찾아 나선 아이의 실수와 불안을 지켜보고, 손짓으로 다시 일어설 용기를 건넵니다. 한지 질감의 세계와 연등이 띄워지는 밤을 손으로 만지듯 체험합니다.",
      history: ["2026 New Content Academy Showcase 출품"],
      linkLabel: "작품 사이트",
    },
    maeum: {
      title: "마음한첩",
      titleEn: "A Dose of Heart",
      year: "2025",
      format: "VR 시네마 · 로우폴리 애니메이션",
      logline: "아픈 아버지에게 약을 가져다주려 길을 나선 아이, 그리고 반대 방향으로 가는 버스.",
      body: "따뜻한 가을빛 로우폴리 마을을 배경으로, 작은 실수와 되돌아오는 길을 그린 짧은 VR 애니메이션입니다.",
      linkLabel: "작품 사이트",
    },
    snowglobe: {
      title: "in the snowglobe",
      titleEn: "하얀 눈이 내려올 때면",
      year: "제작 중",
      format: "MR → VR → MR · 눈사람 만들기 체험",
      logline: "스노우볼 속으로 들어가, 함께 눈사람을 만들고 돌아옵니다.",
      body: "스노우볼 안에서 눈사람을 만드는 MR·VR 체험입니다. 제작 중입니다.",
    },
  },
  howWeWork: {
    heading: "공간까지 운영합니다",
    body: "기다리는 사람도 보고 즐길 수 있는 공간을 만듭니다. 조형물·조명·모니터 미러링으로 체험 전후의 흐름을 설계하고, 현장 안내와 장비 관리까지 직접 맡습니다.",
    photos: [
      { alt: "쇼케이스 부스 전경. 한지 조형물과 연등 벽, 체험 중인 관람객", caption: "2026 New Content Academy Showcase · 부스 전경" },
      { alt: "체험을 마친 관람객이 연등 메모를 벽에 붙이고, 옆에서는 다른 관람객이 헤드셋을 쓰고 있는 모습", caption: "체험 뒤 연등 메모를 벽에 붙이는 관람객" },
      { alt: "체험 스테이션과 조형물 설치 모습", caption: "체험 스테이션 · 조형물 · 안내 테이블 구성" },
    ],
    planCaption: "동선 개념도: 리셉션, 체험 스테이션 3대, 디스플레이, 출구 순서 (실측 도면 아님)",
    stack: ["Unity", "Meta Quest 3 · 핸드 트래킹", "모니터 미러링", "조형·조명 연출", "현장 운영"],
  },
  members: [
    { name: "송동호", role: "기획 · 연출", bio: "" },
    { name: "김하윤", role: "개발", bio: "" },
    { name: "안지윤", role: "아트", bio: "" },
  ],
  contact: {
    heading: "같이 만들어요",
    body: "영화제 배급, 전시 공간·팝업 협업, 커미션 제작 모두 환영합니다.",
  },
};

export default ko;
