import { Title } from './Title';

import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import angular from '../assets/angular.png';
import python from '../assets/python.png';

export const Skills = () => {
  return (
    <section id="skills" className="skills">
      <Title title="Skills"/>
      <hr />
      <div>
        <div>
          <img src={html} alt="Image not available!" />
          <p>HTML</p>
        </div>
        <div>
          <img src={css} alt="Image not available!" />
          <p>CSS</p>
        </div>
        <div>
          <img src={javascript} alt="Image not available!" />
          <p>JavaScript</p>
        </div>
        <div>
          <img src={react} alt="Image not available!" />
          <p>React</p>
        </div>
        <div>
          <img src={angular} alt="Image not available!" />
          <p>Angular</p>
        </div>
        <div>
          <img src={python} alt="Image not available!" />
          <p>Python</p>
        </div>
      </div>
    </section>
  );
};
