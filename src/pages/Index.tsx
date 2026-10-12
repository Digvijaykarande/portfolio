import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <a
      href="#work"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:px-4 focus:py-2"
      style={{ background: "var(--ink)", color: "var(--paper)" }}
    >
      Skip to projects
    </a>
    <Navbar />
    <main className="overflow-x-clip">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Journey />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;
