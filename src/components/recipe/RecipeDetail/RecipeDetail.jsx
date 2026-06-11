import { useRecipes } from "../../../hooks/useRecipes";
import StatCell from "../../common/StatCell/StatCell";
import IconButton from "../../common/IconButton/IconButton";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";
import IngredientsList from "../IngredientsList/IngredientsList";
import InstructionsList from "../InstructionsList/InstructionsList";
import "./RecipeDetail.css";

export default function RecipeDetail() {
  const { selectedRecipe, deleteRecipe, toggleFavorite, openEditPanel } = useRecipes();

  if (!selectedRecipe) return null;

  const r = selectedRecipe;

  function handleDelete() {
    if (window.confirm(`Delete "${r.name}"? This cannot be undone.`)) {
      deleteRecipe(r.id);
    }
  }

  return (
    <div className="recipe-detail">
      <div className="recipe-detail__hero">
        {r.image ? (
          <img className="recipe-detail__hero-img" src={r.image} alt={r.name} />
        ) : (
          <div className="recipe-detail__hero-fallback">
            <span className="material-symbols-outlined">restaurant</span>
          </div>
        )}
        <div className="recipe-detail__hero-scrim" />

        <div className="recipe-detail__hero-fav">
          <IconButton
            icon="favorite"
            variant="overlay"
            size="md"
            fill={r.favorite}
            title={r.favorite ? "Remove from favorites" : "Add to favorites"}
            onClick={() => toggleFavorite(r.id)}
          />
        </div>

        <div className="recipe-detail__hero-title">
          <h2 className="recipe-detail__name">{r.name}</h2>
        </div>
      </div>

      <div className="recipe-detail__actions">
        <IconButton
          icon="edit"
          variant="default"
          size="md"
          title="Edit recipe"
          onClick={openEditPanel}
        />
        <IconButton
          icon="delete"
          variant="danger"
          size="md"
          title="Delete recipe"
          onClick={handleDelete}
        />
      </div>

      {(r.time || r.servings || r.calories) && (
        <div className="recipe-detail__stats">
          {r.time     && <StatCell icon="schedule"             label="Time"     value={`${r.time} min`}    colorVar="--color-primary"   />}
          {r.calories && <StatCell icon="local_fire_department" label="Calories" value={`${r.calories} kcal`} colorVar="--color-tertiary"  />}
          {r.servings && <StatCell icon="group"                label="Serves"   value={r.servings}          colorVar="--color-secondary" />}
        </div>
      )}

      {r.description && (
        <p className="recipe-detail__desc">{r.description}</p>
      )}

      <IngredientsList ingredients={r.ingredients} />

      <InstructionsList instructions={r.instructions} />

      
      <div className="recipe-detail__cta">
        <PrimaryButton label="Start Cooking Mode" icon="restaurant" fullWidth />
      </div>
    </div>
  );
}
