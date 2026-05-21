import { Card } from './Card';
import { Title } from './Title';

const PROJECTS = [
  {
    title: 'EduPro',
    description:
      'It is a complete package for Schools, Colleges and Universities. It can store, organise & track the record of students, teachers & staffs.',
    tools:
      'React, React Native, Node.js, Express.js, JavaScript, CSS and MongoDB',
  },
  {
    title: 'QuickBite',
    description:
      'It is a food-ordering app. You can order your meal at anytime, anywhere without any hassle.',
    tools:
      'React, React Native, Node.js, Express.js, JavaScript, CSS and MongoDB',
  },
  {
    title: 'SmartStock',
    description:
      'It is a stock (inventory) management system which helps to view real-time stock levels. It helps to reduce human errors from manual counting and prevents lost or misplaced items.',
    tools:
      'React, React Native, Node.js, Express.js, JavaScript, CSS and MongoDB',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div>
        <Title title="My Projects" />
        <hr />
        <div className="proj-lists">
          {PROJECTS.map((project, i) => {
            return (
              <Card
                key={i}
                title={project.title}
                description={project.description}
                tools={project.tools}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
