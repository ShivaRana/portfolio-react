import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import angular from '../assets/angular.png';
import python from '../assets/html.png';

export const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h3>Skills</h3>
      <hr />
      <div>
        <img src={html} alt="Image not available!" />
        <img src={css} alt="Image not available!" />
        <img src={javascript} alt="Image not available!" />
        <img src={react} alt="Image not available!" />
        <img src={angular} alt="Image not available!" />
        <img src={python} alt="Image not available!" />
      </div>
    </section>
  );
};
