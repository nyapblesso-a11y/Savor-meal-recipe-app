import "./InstructionsList.css";

export default function InstructionsList({ instructions }) {
  if (!instructions?.length) return null;

  return (
    <div className="instructions-list">
      <h3 className="instructions-list__heading">
        <span className="material-symbols-outlined">cooking</span>
        Method
      </h3>
      <ol className="instructions-list__steps">
        {instructions.map((step, i) => (
          <li key={i} className="instructions-list__step">
            <div className="instructions-list__step-num">{i + 1}</div>
            <p className="instructions-list__step-text">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
