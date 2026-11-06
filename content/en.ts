import type { LocaleText } from "./types";

/** English — [TODO] marks placeholder copy */
const en: LocaleText = {
  site: {
    tagline: "We make VR stories you experience in a space",
    description:
      "aNap is a three-person studio that plans and produces VR content and runs its own exhibition spaces.",
    eyebrow: "An Immersive Story Studio",
  },
  ui: {
    nav: { about: "About", works: "Works", space: "Space", people: "People", contact: "Contact" },
    scrollDown: "Scroll down",
    worksHeading: "What we've made",
    worksLead: "Click a card to open the project site.",
    stackLabel: "What we work with",
    peopleHeading: "The team",
    portfolio: "Portfolio",
    contactCaption: "Writing the next story",
    planAlt: "Exhibition space flow concept diagram",
    podAria: "Three peas napping in a pod — aNap",
    aboutSceneAria: "A pea puzzling over a floor plan, and two peas in a story meeting",
    aboutSceneLabels: ["Floor plan", "Story meeting"],
    brainstormAria: "Three peas in glasses, pencils in hand, heads together working on a story",
    rights: "All rights reserved.",
    langMenu: "Language",
    newWindow: "opens in a new window",
  },
  about: {
    heading: "What we make",
    body: [
      "Short, dense VR cinema and interactive experiences. We design not only the story inside the headset, but the space before you put it on and after you take it off — as one experience.",
      "Three people who met at the New Content Academy, handling everything from planning to production and running the exhibition ourselves.",
    ],
    strengths: [
      {
        title: "We've run exhibitions ourselves",
        body: "We planned and built a showcase booth and ran it in person — visitor flow, onboarding and guidance included.",
      },
      {
        title: "We design space and content together",
        body: "Hanji paper sculptures, lighting and monitor mirroring are composed as one set with the VR content.",
      },
      {
        title: "From planning to build, in one team",
        body: "Script, art, Unity development, sound and exhibition operation all happen inside the team, so we adapt quickly when collaborating.",
      },
    ],
  },
  works: {
    daydream: {
      title: "DayDream",
      titleEn: "Dear Brave",
      year: "2026",
      format: "Hand-tracking VR interactive cinema · Meta Quest",
      logline: "As a mountain spirit, you watch over a child's night as she searches for a healing herb.",
      body: "You become a spirit watching a child who set out to find medicine for her sick mother — her stumbles, her fear — and with a gesture of your hand, give her the courage to stand up again. A world with the texture of hanji paper and a night of floating lanterns, experienced as if by touch.",
      history: ["2026 New Content Academy Showcase"],
      linkLabel: "Project site",
    },
    maeum: {
      title: "A Dose of Heart",
      titleEn: "마음한첩",
      year: "2025",
      format: "VR cinema · low-poly animation",
      logline: "A child sets out to bring medicine to her sick father — and the bus goes the other way.",
      body: "A short VR animation set in a warm, autumn-lit low-poly village, about a small mistake and the way back home. [TODO: runtime · screenings]",
      linkLabel: "Project site",
    },
    snowglobe: {
      title: "in the snowglobe",
      titleEn: "When the White Snow Falls",
      year: "In production",
      format: "MR → VR → MR · build-a-snowman experience",
      logline: "Step into a snow globe, build a snowman together, and come back out.",
      body: "[TODO: synopsis · images coming soon]",
    },
  },
  howWeWork: {
    heading: "We run the space, too",
    body: "Not just a booth with a headset on a table — we build a space where people waiting can watch and enjoy. Sculptures, lighting and monitor mirroring shape the flow before and after the experience, and we handle on-site guidance and equipment ourselves.",
    photos: [
      { alt: "Showcase booth overview — hanji sculptures, a lantern wall and visitors mid-experience", caption: "2026 New Content Academy Showcase · booth overview" },
      { alt: "A visitor in a headset reaching out during the experience", caption: "Hand-tracking experience · monitor mirroring lets waiting visitors watch along" },
      { alt: "Experience stations and sculpture installation", caption: "Experience stations · sculptures · info table" },
    ],
    planCaption: "Flow concept — reception → 3 experience stations → display → exit (concept diagram, not a measured plan)",
    stack: ["Unity", "Meta Quest 3 · hand tracking", "Monitor mirroring", "Sculpture & lighting", "On-site operation"],
  },
  members: [
    { name: "Dongho Song", role: "Planning · Direction", bio: "[TODO] one-line bio" },
    { name: "Hayun Kim", role: "[TODO] role", bio: "[TODO] one-line bio" },
    { name: "Jiyun An", role: "[TODO] role", bio: "[TODO] one-line bio" },
  ],
  contact: {
    heading: "Let's make something together",
    body: "Festival distribution, exhibition and pop-up partnerships, and commissioned work are all welcome.",
  },
};

export default en;
