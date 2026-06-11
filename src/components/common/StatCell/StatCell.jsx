import "./StatCell.css";

export default function StatCell({ icon, label, value, colorVar = "--color-primary" }) {
  return (
    <div className="stat-cell">
      <span
        className="material-symbols-outlined stat-cell__icon"
        style={{ color: `var(${colorVar})` }}
      >
        {icon}
      </span>
      <span className="stat-cell__label">{label}</span>
      <span className="stat-cell__value">{value}</span>
    </div>
  );
}
