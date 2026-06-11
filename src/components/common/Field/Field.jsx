import "./Field.css";

export default function Field({ label, children }) {
  return (
    <div className="field">
      {label && <label className="field__label">{label}</label>}
      {children}
    </div>
  );
}
