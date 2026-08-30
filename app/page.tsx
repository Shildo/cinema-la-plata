import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Schedule from "@/components/Schedule/Schedule";
import MovieSection from "@/components/MovieSection/MovieSection";
import ComplexSection from "@/components/ComplexSection/ComplexSection";
import Experience from "@/components/Experience/Experience";
import Benefits from "@/components/Benefits/Benefits";
import News from "@/components/News/News";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <MovieSection />
        <ComplexSection />
        <Schedule />
        <Experience />
        <Benefits />
        <News />
        <About />
        <Contact /> 
      </main>

      <Footer />
    </>
  );
}