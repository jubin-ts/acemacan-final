import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Sectors from "@/components/Sectors";
import WhyChoose from "@/components/WhyChoose";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorFollow from "@/components/CursorFollow";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <CursorFollow />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Sectors />
        <WhyChoose />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
