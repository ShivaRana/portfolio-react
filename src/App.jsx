import './App.css';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Project } from './components/Project';
import { AboutMe } from './components/AboutMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Achievements />
      <Skills />
      <Project />
      <AboutMe />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
