import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Recommendations from "@/components/Recommendations";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Recommendations />
        <Projects />
        <Research />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
