import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import SolarFilms from "@/components/solar-films";
import About from "@/components/about";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-gray-200">
      <Navbar />
      <Hero />
      <Services />
      <SolarFilms />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
