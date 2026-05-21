const devTools = 'Dev Tools';
const note = 'This is for learning purposes only.';

export const Card = ({ title, description, tools }) => {
  return (
    <div className="proj-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <h4>{devTools}</h4>
      <p>{tools}</p>
      <div className="note">{note}</div>
    </div>
  );
};
