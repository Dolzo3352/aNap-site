import type { LocaleText } from "./types";

/** 日本語 — [TODO] は仮の文言です */
const ja: LocaleText = {
  site: {
    tagline: "空間の中で体験するVRの物語をつくります",
    description: "aNapはVRコンテンツの企画・制作を行い、自ら展示空間を運営してきた3人のスタジオです。",
    eyebrow: "An Immersive Story Studio",
  },
  ui: {
    nav: { about: "About", works: "Works", space: "Space", people: "People", contact: "Contact" },
    scrollDown: "下へスクロール",
    worksHeading: "つくったもの",
    worksLead: "カードをクリックすると作品サイトへ移動します。",
    stackLabel: "使っているもの",
    peopleHeading: "メンバー紹介",
    portfolio: "ポートフォリオ",
    contactCaption: "物語をつくっている最中",
    planAlt: "展示空間の動線コンセプト図",
    podAria: "さやの中で昼寝をする3つの豆 — aNap",
    aboutSceneAria: "図面を見ながら考え込む豆と、ストーリーボードの前で会議をする2つの豆",
    aboutSceneLabels: ["空間の図面", "コンテンツ会議"],
    brainstormAria: "眼鏡をかけ鉛筆を手にした3つの豆が、頭を寄せ合って物語を考えている様子",
    rights: "All rights reserved.",
    langMenu: "言語を選択",
    newWindow: "新しいウィンドウで開きます",
  },
  about: {
    heading: "私たちがつくるもの",
    body: [
      "短く密度の高いVRシネマとインタラクティブ体験をつくります。ヘッドセットの中の物語だけでなく、装着する前と外した後の空間まで、ひとつの体験として設計します。",
      "ニューコンテンツアカデミーで出会った3人が、企画から制作・展示運営まで自分たちの手で行ってきました。",
    ],
    strengths: [
      {
        title: "展示を自ら運営してきました",
        body: "ショーケースのブースを企画・設営し、来場者の動線や体験案内まで自分たちで運営しました。[TODO: 会場・期間・来場者数]",
      },
      {
        title: "空間とコンテンツを一緒に設計します",
        body: "韓紙の造形物、照明、モニターミラーリングなどの空間演出を、VRコンテンツとワンセットで構成します。",
      },
      {
        title: "企画からビルドまで、ひとつのチームで",
        body: "シナリオ、アート、Unity開発、サウンド、展示運営をチーム内で担います。外部との協業にも素早く対応できます。",
      },
    ],
  },
  works: {
    daydream: {
      title: "DayDream",
      titleEn: "Dear Brave",
      year: "2026",
      format: "ハンドトラッキングVRインタラクティブシネマ · Meta Quest",
      logline: "神霊となったあなたが、薬草を探しに出た子どもの夜を見守ります。",
      body: "プレイヤーは神霊となり、病気の母のために薬草を探しに出た子どもの失敗と不安を見守り、手のしぐさで再び立ち上がる勇気を届けます。韓紙の質感の世界と、燃灯が浮かぶ夜を、手で触れるように体験します。",
      history: ["2026 New Content Academy Showcase 出展"],
      linkLabel: "作品サイト",
    },
    maeum: {
      title: "A Dose of Heart",
      titleEn: "마음한첩（こころの一包）",
      year: "2025",
      format: "VRシネマ · ローポリアニメーション",
      logline: "病気の父に薬を届けようと旅に出た子ども、そして反対方向へ走るバス。",
      body: "暖かな秋色のローポリの村を舞台に、小さな失敗と帰り道を描いた短編VRアニメーションです。[TODO: 上映時間・上映歴]",
      linkLabel: "作品サイト",
    },
    snowglobe: {
      title: "in the snowglobe",
      titleEn: "白い雪が降るころ",
      year: "制作中",
      format: "MR → VR → MR · 雪だるまづくり体験",
      logline: "スノードームの中へ入り、一緒に雪だるまをつくって帰ってきます。",
      body: "[TODO: 作品紹介・画像準備中]",
    },
  },
  howWeWork: {
    heading: "空間まで運営します",
    body: "ヘッドセットが置いてあるだけのブースではなく、待っている人も見て楽しめる空間をつくります。造形物・照明・モニターミラーリングで体験前後の流れを設計し、現場案内や機材管理まで自分たちで担います。",
    photos: [
      { alt: "ショーケースブース全景 — 韓紙の造形物と燃灯の壁、体験中の来場者", caption: "2026 New Content Academy Showcase · ブース全景" },
      { alt: "ヘッドセットを着けて手を伸ばし体験中の来場者", caption: "ハンドトラッキング体験 · モニターミラーリングで待機中の来場者も一緒に観覧" },
      { alt: "体験ステーションと造形物の設営の様子", caption: "体験ステーション · 造形物 · 案内テーブルの構成" },
    ],
    planCaption: "動線コンセプト図 — 受付 → 体験ステーション3台 → ディスプレイ → 出口（概念図であり、実測図面ではありません）",
    stack: ["Unity", "Meta Quest 3 · ハンドトラッキング", "モニターミラーリング", "造形・照明演出", "現場運営"],
  },
  members: [
    { name: "ソン・ドンホ", role: "企画・演出", bio: "[TODO] ひとこと紹介" },
    { name: "キム・ハユン", role: "[TODO] 役割", bio: "[TODO] ひとこと紹介" },
    { name: "アン・ジユン", role: "[TODO] 役割", bio: "[TODO] ひとこと紹介" },
  ],
  contact: {
    heading: "一緒につくりましょう",
    body: "映画祭への配給、展示空間・ポップアップとの協業、コミッション制作など、お気軽にご相談ください。",
  },
};

export default ja;
