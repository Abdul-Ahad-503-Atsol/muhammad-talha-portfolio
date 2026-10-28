import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WelcomePopup from './components/ui/WelcomePopup';
import Hero from './components/sections/Hero';
import IntroStrip from './components/sections/IntroStrip';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Reviews from './components/sections/Reviews';
import Expertise from './components/sections/Expertise';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IntroStrip />
        <About />
        <Projects />
        <Reviews />
        <Expertise />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <WelcomePopup />
    </>
  );
}
