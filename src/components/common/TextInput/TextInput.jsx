import { useState } from "react";
import "./TextInput.css";

export default function TextInput({
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  min,
  rows,
}) {
  const [focused, setFocused] = useState(false);

  const cls = `text-input${focused ? " text-input--focused" : ""}`;

  if (rows) {
    return (
      <textarea
        className={cls}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    );
  }

  return (
    <input
      className={cls}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      min={min}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}
