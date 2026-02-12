import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import AnimatedBackground from "./components/AnimatedBackground";

export default function Home() {
  return (
    <main className="relative">
      <AnimatedBackground />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Certifications />
      <Contact />
    </main>
  );
}
