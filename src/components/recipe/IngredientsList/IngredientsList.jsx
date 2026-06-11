import { useState } from "react";
import "./IngredientsList.css";

export default function IngredientsList({ ingredients }) {
  const [checked, setChecked] = useState({});

  function toggle(index) {
    setChecked((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  if (!ingredients?.length) return null;

  return (
    <div className="ingredients-list">
      <h3 className="ingredients-list__heading">
        <span className="material-symbols-outlined">flatware</span>
        Ingredients
      </h3>
      <ul className="ingredients-list__items">
        {ingredients.map((item, i) => (
          <li
            key={i}
            className={`ingredients-list__item${checked[i] ? " ingredients-list__item--checked" : ""}`}
            onClick={() => toggle(i)}
          >
            <span
              className="material-symbols-outlined ingredients-list__check"
              style={{ fontVariationSettings: checked[i] ? "'FILL' 1" : "'FILL' 0" }}
            >
              check_circle
            </span>
            <span className="ingredients-list__text">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
