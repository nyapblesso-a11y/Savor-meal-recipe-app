import { useState } from "react";
import { useRecipes } from "../../../hooks/useRecipes";
import IconButton from "../../common/IconButton/IconButton";
import "./RecipeCard.css";

export default function RecipeCard({ recipe }) {
  const { selectedId, openViewPanel, toggleFavorite } = useRecipes();
  const [imgFailed, setImgFailed] = useState(false);
  const isSelected = selectedId === recipe.id;

  function handleCardClick() {
    openViewPanel(recipe.id);
  }

  function handleFavoriteClick(e) {
    e.stopPropagation();
    toggleFavorite(recipe.id);
  }

  return (
    <article
      className={`recipe-card${isSelected ? " recipe-card--selected" : ""}`}
      onClick={handleCardClick}
    >
      {/* Image */}
      <div className="recipe-card__image-wrap">
        {recipe.image && !imgFailed ? (
          <img
            className="recipe-card__image"
            src={recipe.image}
            alt={recipe.name}
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="recipe-card__image-fallback">
            <span className="material-symbols-outlined">restaurant</span>
          </div>
        )}

        {/* Gradient scrim */}
        <div className="recipe-card__scrim" />

        {/* Favorite button */}
        <div className="recipe-card__fav-btn">
          <IconButton
            icon="favorite"
            variant="overlay"
            size="sm"
            fill={recipe.favorite}
            title={recipe.favorite ? "Remove from favorites" : "Add to favorites"}
            onClick={handleFavoriteClick}
          />
        </div>

        {/* Time badge */}
        {recipe.time && (
          <div className="recipe-card__time-badge">
            <span className="material-symbols-outlined">schedule</span>
            <span>{recipe.time} min</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="recipe-card__body">
        <h3 className="recipe-card__title">{recipe.name}</h3>
        {recipe.description && (
          <p className="recipe-card__desc">{recipe.description}</p>
        )}
        <div className="recipe-card__meta">
          {recipe.servings && (
            <span className="recipe-card__meta-item">
              <span className="material-symbols-outlined">group</span>
              {recipe.servings} {recipe.servings === "1" ? "serving" : "servings"}
            </span>
          )}
          {recipe.calories && (
            <span className="recipe-card__meta-item">
              <span className="material-symbols-outlined">local_fire_department</span>
              {recipe.calories} kcal
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
