import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import MovieSection from "@/components/MovieSection/MovieSection";
import ComplexSection from "@/components/ComplexSection/ComplexSection";
import Experience from "@/components/Experience/Experience";
import News from "@/components/News/News";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <MovieSection />
        <ComplexSection />
        <Experience />
        <About />
        <News />
        <Contact /> 
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
}
