import { About } from "@/components/About";
import { Automation } from "@/components/Automation";
import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { EngineeringLab } from "@/components/EngineeringLab";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IntentPaths } from "@/components/IntentPaths";
import { Process } from "@/components/Process";
import { SiteHeader } from "@/components/SiteHeader";
import { Stack } from "@/components/Stack";
import { siteConfig } from "@/data/portfolio";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.siteUrl}/#person`,
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      email: `mailto:${siteConfig.email}`,
      jobTitle: siteConfig.role,
      sameAs: [siteConfig.github],
      knowsAbout: [
        "TypeScript",
        "React",
        "Next.js",
        "PostgreSQL",
        "Prisma",
        "Python",
        "Software Automation",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.siteUrl}/#profile-page`,
      url: siteConfig.siteUrl,
      name: `${siteConfig.name} — ${siteConfig.role}`,
      inLanguage: "pt-BR",
      mainEntity: { "@id": `${siteConfig.siteUrl}/#person` },
    },
  ],
};

export default function Home() {
  return (
    <div id="top">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <Capabilities />
        <FeaturedWork />
        <Automation />
        <EngineeringLab />
        <Process />
        <Stack />
        <About />
        <IntentPaths />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
