import './App.css';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AboutMe } from './components/AboutMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  

  return (
    <>
      
      <ScrollToTop />
      <Header />
      <Hero />
      <Achievements />
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
