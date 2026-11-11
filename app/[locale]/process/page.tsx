import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Icon, { Wordmark } from "@/components/Icon";
import ProcessSection from "@/components/ProcessSection";
import { getContent, isLocale, localeLabel, locales } from "@/content";
import { processText } from "@/content/process";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = processText[locale];
  return {
    title: `${t.title} — aNap`,
    description: t.lead,
    alternates: {
      canonical: `/${locale}/process`,
      languages: Object.fromEntries(locales.map((l) => [localeLabel[l].html, `/${l}/process`])),
    },
  };
}

export default async function ProcessPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { ui } = getContent(locale);
  const t = processText[locale];

  return (
    <>
      <Nav locale={locale} labels={ui.nav} langMenu={ui.langMenu} processLabel={t.navLabel} subpath="/process" />
      <main className="process">
        <ProcessSection locale={locale} standalone />

        <p className="process-back">
          <a className="btn btn-sm" href={`/${locale}`}>
            <Icon name="arrow" size={15} className="flip" /> {t.back}
          </a>
        </p>
      </main>

      <footer className="footer">
        <Wordmark height={18} />
        <p>
          © {new Date().getFullYear()} aNap. {ui.rights}
        </p>
      </footer>
    </>
  );
}
