import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FadeIn } from "@/components/FadeIn";
import { FloatingMetrics } from "@/components/FloatingMetrics";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#070c1b] text-[#dce8f8]">
      <NavBar />
      <Hero />
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <Skills />
      </FadeIn>
      <FadeIn>
        <Projects />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
      <Footer />
      <FloatingMetrics />
    </div>
  );
}
