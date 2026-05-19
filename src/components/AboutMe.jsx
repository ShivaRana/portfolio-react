import { Title } from './Title';

import shiva from '../assets/shiva.png';

export const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <Title title="About Me"/>
      <hr />
      <div className="info">
        <img src={shiva} alt="Image not available!" />
        <div className="personal-info">
          <h3>Shiva Rana</h3>
          <p>
            I am a software developer focused on building reliable,
            user-friendly web applications. I enjoy turning messy requirements
            into clean and maintainable systems.
          </p>
          <h4>Sydney, Australia</h4>
          <br />
          <h4>Interest</h4>
          <p>
            &nbsp;&nbsp;&nbsp;Coding&nbsp;&nbsp;&nbsp;Travelling&nbsp;&nbsp;&nbsp;Cycling&nbsp;&nbsp;&nbsp;Football
          </p>
        </div>
      </div>
    </section>
  );
};
