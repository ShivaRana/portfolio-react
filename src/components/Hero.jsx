import shiva from '../assets/shiva.png';

export const Hero = () => {
  return (
    <section className="hero">
      <div>
        <div className="banner">
          <h3>Shiva Rana</h3>
          <p>Software Developer</p>
          <p>Coding is my passion!</p>
          <button className="btn-download">
            <a href={'../assets/shiva.png'} download>
              Download CV&nbsp;&nbsp;&nbsp;
              <i className="bi bi-cloud-arrow-down"></i>
            </a>
          </button>
        </div>
        <img src={shiva} alt="Image not available!" />
      </div>
    </section>
  );
};
