import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f1e]">
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <FloatingButtons />
      <ScrollToTop />
    </main>
  );
}
