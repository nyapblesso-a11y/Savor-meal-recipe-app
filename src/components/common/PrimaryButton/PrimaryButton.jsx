import "./PrimaryButton.css";

export default function PrimaryButton({ label, icon, onClick, type = "button", disabled = false, fullWidth = false }) {
  return (
    <button
      className={`primary-btn${fullWidth ? " primary-btn--full" : ""}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && (
        <span className="material-symbols-outlined primary-btn__icon">{icon}</span>
      )}
      {label}
    </button>
  );
}
