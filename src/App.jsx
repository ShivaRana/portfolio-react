import './App.css';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
