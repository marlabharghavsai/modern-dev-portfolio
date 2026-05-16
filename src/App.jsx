import { ParallaxProvider } from 'react-scroll-parallax';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-slate-950 text-slate-50 relative selection:bg-primary-500/30">
        <NavBar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
