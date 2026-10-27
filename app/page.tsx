import Image from "next/image";
import Nav from "@/components/Nav";
import Pod from "@/components/Pod";
import Brainstorm from "@/components/Brainstorm";
import AboutScene from "@/components/AboutScene";
import PeaAvatar from "@/components/PeaAvatar";
import Reveal from "@/components/Reveal";
import WorkCard from "@/components/WorkCard";
import Icon, { Divider, Wordmark } from "@/components/Icon";
import { about, contact, howWeWork, members, site, works } from "@/content/site";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* ───────── Hero ───────── */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-eyebrow">An Immersive Story Studio</p>
            <h1 id="hero-title" className="hero-title">
              <span className="sr-only">{site.name} — </span>
              {site.tagline}
            </h1>
            <p className="hero-sub">{site.description}</p>
          </div>

          <div className="hero-pod">
            <Pod />
          </div>

          <a href="#about" className="hero-scroll" aria-label="아래로 스크롤">
            <Icon name="scroll" size={22} />
          </a>
        </section>

        {/* ───────── About ───────── */}
        <section id="about" className="section about" aria-labelledby="about-title">
          <Reveal className="section-head">
            <p className="eyebrow">About</p>
            <h2 id="about-title" className="h2">
              {about.heading}
            </h2>
          </Reveal>

          <div className="about-grid">
            <div className="about-left">
              <Reveal className="about-body" delay={60}>
                {about.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </Reveal>
              <Reveal className="about-scene-wrap" delay={200}>
                <AboutScene />
              </Reveal>
            </div>
            <ol className="strengths">
              {about.strengths.map((s, i) => (
                <Reveal as="li" key={s.title} className="strength" delay={120 + i * 90}>
                  <span className="strength-num" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <h3 className="strength-title">{s.title}</h3>
                  <p className="strength-body">{s.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <Divider className="section-divider" />

        {/* ───────── Works ───────── */}
        <section id="works" className="section works" aria-labelledby="works-title">
          <Reveal className="section-head">
            <p className="eyebrow">Works</p>
            <h2 id="works-title" className="h2">
              만든 것들
            </h2>
            <p className="section-lead">카드를 누르면 작품 사이트로 이동합니다.</p>
          </Reveal>
          <div className="works-grid">
            {works.map((w, i) => (
              <Reveal key={w.slug} as="article" delay={i * 90}>
                <WorkCard work={w} index={i} />
              </Reveal>
            ))}
          </div>
        </section>

        <Divider className="section-divider" />

        {/* ───────── Space / How we work ───────── */}
        <section id="space" className="section space" aria-labelledby="space-title">
          <Reveal className="section-head">
            <p className="eyebrow">Space</p>
            <h2 id="space-title" className="h2">
              {howWeWork.heading}
            </h2>
            <p className="section-lead">{howWeWork.body}</p>
          </Reveal>

          <div className="space-grid">
            {howWeWork.photos.map((p, i) => (
              <Reveal key={p.src} as="div" className={`space-photo space-photo-${i + 1}`} delay={i * 80}>
                <figure>
                  <div className="space-img-wrap">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes={i === 0 ? "(max-width: 900px) 100vw, 66vw" : "(max-width: 900px) 100vw, 33vw"}
                      className="space-img"
                    />
                  </div>
                  <figcaption>{p.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal as="div" className="space-plan" delay={240}>
              <figure>
                <div className="space-plan-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={howWeWork.plan.src} alt="전시 공간 동선 개념도" />
                </div>
                <figcaption>{howWeWork.plan.caption}</figcaption>
              </figure>
            </Reveal>
          </div>

          <Reveal className="stack" delay={120}>
            <span className="stack-label">함께 쓰는 것들</span>
            <ul className="stack-list">
              {howWeWork.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Reveal>
        </section>

        <Divider className="section-divider" />

        {/* ───────── People ───────── */}
        <section id="people" className="section people" aria-labelledby="people-title">
          <Reveal className="section-head">
            <p className="eyebrow">People</p>
            <h2 id="people-title" className="h2">
              팀원 소개
            </h2>
          </Reveal>
          <ul className="people-grid">
            {members.map((m, i) => (
              <Reveal as="li" key={m.name + i} className="member" delay={i * 100}>
                <PeaAvatar variant={m.character} />
                <h3 className="member-name">{m.name}</h3>
                <p className="member-role">{m.role}</p>
                <p className="member-bio">{m.bio}</p>
                {m.portfolio && (
                  <a
                    className="btn btn-sm"
                    href={m.portfolio}
                    target={m.portfolio.startsWith("http") ? "_blank" : undefined}
                    rel={m.portfolio.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    포트폴리오 <Icon name="external" size={15} />
                  </a>
                )}
              </Reveal>
            ))}
          </ul>
        </section>

        {/* ───────── Contact ───────── */}
        <section id="contact" className="section contact" aria-labelledby="contact-title">
          <Reveal className="contact-inner">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title" className="h2">
              {contact.heading}
            </h2>
            <p className="section-lead">{contact.body}</p>
            <div className="contact-actions">
              <a className="btn btn-primary" href={`mailto:${site.email}`}>
                <Icon name="mail" size={18} /> {site.email}
              </a>
              <a className="btn" href={site.instagram} target="_blank" rel="noopener noreferrer">
                <Icon name="instagram" size={18} /> Instagram
              </a>
            </div>
          </Reveal>
          <div className="contact-scene">
            <Brainstorm />
            <p className="contact-scene-caption">
              이야기를 만드는 중<span className="dots" aria-hidden="true"><i>.</i><i>.</i><i>.</i></span>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <Wordmark height={18} />
        <p>© {new Date().getFullYear()} aNap. All rights reserved.</p>
      </footer>
    </>
  );
}
