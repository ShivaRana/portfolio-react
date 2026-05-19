import graduation from '../assets/graduation.png';
import project from '../assets/project.png';
import experience from '../assets/experience.png';

export const Achievements = () => {
  return (
    <section className="my-achievements">
      <h3>Achievements</h3>
      <hr />
      <div className="achievements">
        <div>
          <img src={graduation} alt="Image not available." />
          <div>
            <h4>MIT</h4>
            <h6>Completed</h6>
          </div>
        </div>
        <div className="long-vl"></div>
        <div>
          <img src={project} alt="Image not available." />
          <div>
            <h4>3 Projects</h4>
            <h6>Completed</h6>
          </div>
        </div>
        <div className="long-vl"></div>
        <div>
          <img src={experience} alt="Image not available." />
          <div>
            <h4>1 Year</h4>
            <h6>Completed</h6>
          </div>
        </div>
      </div>
    </section>
  );
};
