import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import x from '../assets/x.png';
import youtube from '../assets/youtube.png';
import { Title } from './Title';

export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <Title title="Contact"/>
      <hr />
      <div className="contact-via">
        <div>
          <a href="http://www.facebook.com" target="_blank">
            <img src={facebook} alt="Image not available!" />
          </a>
          <a href="http://www.instagram.com" target="_blank">
            <img src={instagram} alt="Image not available!" />
          </a>
          <a href="http://www.linkedin.com" target="_blank">
            <img src={linkedin} alt="Image not available!" />
          </a>
          <a href="http://www.x.com" target="_blank">
            <img src={x} alt="Image not available!" />
          </a>
          <a href="http://www.youtube.com" target="_blank">
            <img src={youtube} alt="Image not available!" />
          </a>
        </div>
        <p className="or">OR</p>
        <button>
          <a href="http://www.gmail.com">mymail@gmail.com</a>&nbsp;
          <i className="bi bi-envelope-arrow-up"></i>
        </button>
      </div>
    </section>
  );
};
