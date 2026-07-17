import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "../components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="hairline max-w-[1200px] mx-auto" />
        <About />
        <div className="hairline max-w-[1200px] mx-auto" />
        <Skills />
        <div className="hairline max-w-[1200px] mx-auto" />
        <Projects />
        <div className="hairline max-w-[1200px] mx-auto" />
        <Resume />
        <div className="hairline max-w-[1200px] mx-auto" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
