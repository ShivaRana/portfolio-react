import './App.css';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AboutMe } from './components/AboutMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  // --- scroll page ---
  let mybutton = document.getElementById('btn-top');

  // Button shows up when the page scrolls 20px down
  window.onscroll = function () {
    scrollPage();

    function scrollPage() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = 'block';
      } else {
        mybutton.style.display = 'none';
      }
    }
  };

  // Function to jump to the top of the page
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      {/* --- button for scroll top --- */}
      <button onClick={() => topFunction()} id="btn-top">
        <i className="bi bi-caret-up"></i>
      </button>

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
