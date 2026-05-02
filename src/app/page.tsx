import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FloatingMetrics } from "@/components/FloatingMetrics";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <FloatingMetrics />
    </div>
  );
}
