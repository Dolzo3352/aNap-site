import type { LocaleText } from "./types";

/** English */
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
    photo: { open: "view larger", close: "Close", prev: "Previous photo", next: "Next photo" },
  },
  about: {
    heading: "What we make",
    body: [
      "Short, dense VR cinema and interactive experiences. We design the space before you put the headset on and after you take it off as one experience with the story inside it.",
      "We are three people who met at the New Content Academy. We plan, produce, and run the exhibitions ourselves.",
    ],
    strengths: [
      {
        title: "We've run exhibitions ourselves",
        body: "We planned and built our booth at the 2026 New Content Academy Showcase and ran it ourselves, including visitor flow and onboarding.",
      },
      {
        title: "We design space and content together",
        body: "Hanji paper sculptures, lighting and monitor mirroring are composed as one set with the VR content.",
      },
      {
        title: "From planning to build, in one team",
        body: "Script, art, Unity development, sound and exhibition operation all happen inside the team, so decisions with outside partners are quick.",
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
      body: "You become a spirit watching a child who set out to find medicine for her sick mother. You see her stumble and lose heart, and with a gesture of your hand you give her the courage to stand up again. The world has the texture of hanji paper, and the night fills with floating lanterns you can almost touch.",
      history: ["2026 New Content Academy Showcase"],
      linkLabel: "Project site",
    },
    maeum: {
      title: "A Dose of Heart",
      titleEn: "마음한첩",
      year: "2025",
      format: "VR cinema · low-poly animation",
      logline: "A child went to get medicine for her father, but got on the bus going the wrong way..?",
      body: "A short VR animation set in a warm, autumn-lit low-poly village, about a small mistake and the way back home.",
      linkLabel: "Project site",
    },
    snowglobe: {
      title: "When the White Snow Falls",
      titleEn: "in the snowglobe",
      linkLabel: "Project site",
      year: "In production",
      format: "MR → VR → MR · build-a-snowman experience",
      logline: "Step into a snow globe, build a snowman together, and come back out.",
      body: "An MR and VR experience where you build a snowman inside a snow globe. In production.",
    },
  },
  howWeWork: {
    heading: "We run the space, too",
    body: "We build a space where people waiting their turn can watch and enjoy. Sculptures, lighting and monitor mirroring shape the flow before and after the experience. We handle on-site guidance and equipment ourselves.",
    photos: [
      { alt: "A visitor sticks a lantern note on the wall after the experience while another puts on a headset", caption: "A visitor adds a lantern note to the wall after the experience" },
      { alt: "Showcase booth overview with hanji sculptures, a lantern wall and visitors mid-experience", caption: "2026 New Content Academy Showcase · booth overview" },
      { alt: "Experience stations and sculpture installation", caption: "Experience stations · sculptures · info table" },
    ],
    planCaption: "Flow concept: reception, three experience stations, display, exit (not a measured plan)",
    stack: ["Unity", "Meta Quest 3 · hand tracking", "Monitor mirroring", "Sculpture & lighting", "On-site operation"],
  },
  members: [
    { name: "Dongho Song", role: "Planning · Direction", bio: "" },
    { name: "Hayun Kim", role: "Development", bio: "" },
    { name: "Jiyun An", role: "Art", bio: "" },
  ],
  contact: {
    heading: "Let's make something together",
    body: "Festival distribution, exhibition and pop-up partnerships, and commissioned work are all welcome.",
  },
};

export default en;
