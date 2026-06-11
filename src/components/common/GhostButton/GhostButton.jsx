import "./GhostButton.css";

export default function GhostButton({ label, onClick, type = "button" }) {
  return (
    <button className="ghost-btn" type={type} onClick={onClick}>
      {label}
    </button>
  );
}
