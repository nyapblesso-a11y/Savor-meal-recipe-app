import "./IconButton.css";

export default function IconButton({ icon, onClick, title, variant = "default", size = "md", fill = false }) {
  return (
    <button
      className={`icon-btn icon-btn--${variant} icon-btn--${size}`}
      onClick={onClick}
      title={title}
      type="button"
    >
      <span
        className="material-symbols-outlined"
        style={{ fontVariationSettings: fill ? "'FILL' 1" : "'FILL' 0" }}
      >
        {icon}
      </span>
    </button>
  );
}
