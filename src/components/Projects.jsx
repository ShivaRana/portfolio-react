import { Title } from "./Title";

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div>
        <Title title="My Projects"/>
        <hr />
        <div className="proj-lists">
          <div className="proj-card">
            <h3>EduPro</h3>
            <p>
              It is a complete package for Schools, Colleges and Universities.
              It can store, organise & track the record of students, teachers &
              staffs.{' '}
            </p>
            <h4>Dev Tools</h4>
            <p>
              React, React Native, Node.js, Express.js, JavaScript, CSS and
              MongoDB
            </p>
            <div className="note">This is for learning purposes only.</div>
          </div>
          <div className="proj-card">
            <h3>QuickBite</h3>
            <p>
              It is a food-ordering app. You can order your meal at anytime,
              anywhere without any hassle.
            </p>
            <h4>Dev Tools</h4>
            <p>
              React, React Native, Node.js, Express.js, JavaScript, CSS and
              MongoDB
            </p>
            <div className="note">This is for learning purposes only.</div>
          </div>
          <div className="proj-card">
            <h3>SmartStock</h3>
            <p>
              It is a stock (inventory) management system which helps to view
              real-time stock levels. It helps to reduce human errors from
              manual counting and prevents lost or misplaced items.
            </p>
            <h4>Dev Tools</h4>
            <p>
              React, React Native, Node.js, Express.js, JavaScript, CSS and
              MongoDB
            </p>
            <div className="note">This is for learning purposes only.</div>
          </div>
        </div>
      </div>
    </section>
  );
};
