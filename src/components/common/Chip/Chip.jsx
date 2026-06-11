import "./Chip.css";

export default function Chip({ label, variant = "green", size = "sm" }) {
  return (
    <span className={`chip chip--${variant} chip--${size}`}>
      {label}
    </span>
  );
}
