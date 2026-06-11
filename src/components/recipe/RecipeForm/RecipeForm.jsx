import { useState } from "react";
import { useRecipes } from "../../../hooks/useRecipes";
import { PANEL_MODES } from "../../../utils/constants";
import Field from "../../common/Field/Field";
import TextInput from "../../common/TextInput/TextInput";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";
import GhostButton from "../../common/GhostButton/GhostButton";
import "./RecipeForm.css";

function buildInitialForm(recipe) {
  if (recipe) {
    return {
      name:         recipe.name         ?? "",
      description:  recipe.description  ?? "",
      image:        recipe.image        ?? "",
      time:         recipe.time         ?? "",
      servings:     recipe.servings     ?? "",
      calories:     recipe.calories     ?? "",
      ingredients:  recipe.ingredients?.length ? [...recipe.ingredients] : [""],
      instructions: recipe.instructions?.length ? [...recipe.instructions] : [""],
    };
  }
  return {
    name: "", description: "", image: "",
    time: "", servings: "", calories: "",
    ingredients: ["", ""],
    instructions: ["", ""],
  };
}

export default function RecipeForm() {
  const { selectedRecipe, panelMode, addRecipe, updateRecipe, closePanel, openViewPanel } = useRecipes();
  const isEdit = panelMode === PANEL_MODES.EDIT;

  const [form, setForm] = useState(() => buildInitialForm(isEdit ? selectedRecipe : null));
  const [imgPreviewError, setImgPreviewError] = useState(false);

  function setField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function setListItem(key, index, value) {
    setForm((prev) => {
      const arr = [...prev[key]];
      arr[index] = value;
      return { ...prev, [key]: arr };
    });
  }

  function addListItem(key) {
    setForm((prev) => ({ ...prev, [key]: [...prev[key], ""] }));
  }

  function removeListItem(key, index) {
    setForm((prev) => ({
      ...prev,
      [key]: prev[key].filter((_, i) => i !== index),
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      ...form,
      ingredients:  form.ingredients.filter(Boolean),
      instructions: form.instructions.filter(Boolean),
    };
    if (isEdit) {
      updateRecipe(selectedRecipe.id, data);
    } else {
      addRecipe(data);
    }
  }

  function handleCancel() {
    if (isEdit && selectedRecipe) {
      openViewPanel(selectedRecipe.id);
    } else {
      closePanel();
    }
  }

  /* ── Render ─────────────────────────────────────────── */
  return (
    <form className="recipe-form" onSubmit={handleSubmit} noValidate>

      {/* Image URL */}
      <Field label="Image URL">
        <TextInput
          value={form.image}
          onChange={(e) => { setField("image", e.target.value); setImgPreviewError(false); }}
          placeholder="https://example.com/photo.jpg"
          type="url"
        />
        {form.image && !imgPreviewError && (
          <div className="recipe-form__img-preview">
            <img
              src={form.image}
              alt="Preview"
              onError={() => setImgPreviewError(true)}
            />
          </div>
        )}
        {imgPreviewError && (
          <p className="recipe-form__img-error">Could not load image from that URL.</p>
        )}
      </Field>

      {/* Name */}
      <Field label="Recipe Name *">
        <TextInput
          value={form.name}
          onChange={(e) => setField("name", e.target.value)}
          placeholder="e.g. Grandma's Heirloom Tomato Pasta"
          required
        />
      </Field>

      <Field label="Description">
        <TextInput
          value={form.description}
          onChange={(e) => setField("description", e.target.value)}
          placeholder="A brief description of the recipe…"
          rows={3}
        />
      </Field>

      <div className="recipe-form__numeric-row">
        <Field label="Time (min)">
          <TextInput
            value={form.time}
            onChange={(e) => setField("time", e.target.value)}
            placeholder="30"
            type="number"
            min="0"
          />
        </Field>
        <Field label="Servings">
          <TextInput
            value={form.servings}
            onChange={(e) => setField("servings", e.target.value)}
            placeholder="4"
            type="number"
            min="1"
          />
        </Field>
        <Field label="Calories">
          <TextInput
            value={form.calories}
            onChange={(e) => setField("calories", e.target.value)}
            placeholder="400"
            type="number"
            min="0"
          />
        </Field>
      </div>

      <Field label="Ingredients">
        <div className="recipe-form__list">
          {form.ingredients.map((ing, i) => (
            <div className="recipe-form__list-row" key={i}>
              <TextInput
                value={ing}
                onChange={(e) => setListItem("ingredients", i, e.target.value)}
                placeholder={`e.g. 2 cups fresh basil`}
              />
              {form.ingredients.length > 1 && (
                <button
                  type="button"
                  className="recipe-form__remove-btn"
                  onClick={() => removeListItem("ingredients", i)}
                  title="Remove"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="recipe-form__add-item-btn"
            onClick={() => addListItem("ingredients")}
          >
            <span className="material-symbols-outlined">add</span>
            Add ingredient
          </button>
        </div>
      </Field>

      <Field label="Method (Steps)">
        <div className="recipe-form__list">
          {form.instructions.map((step, i) => (
            <div className="recipe-form__list-row recipe-form__list-row--step" key={i}>
              <div className="recipe-form__step-num">{i + 1}</div>
              <TextInput
                value={step}
                onChange={(e) => setListItem("instructions", i, e.target.value)}
                placeholder={`Step ${i + 1}…`}
                rows={2}
              />
              {form.instructions.length > 1 && (
                <button
                  type="button"
                  className="recipe-form__remove-btn"
                  onClick={() => removeListItem("instructions", i)}
                  title="Remove"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="recipe-form__add-item-btn"
            onClick={() => addListItem("instructions")}
          >
            <span className="material-symbols-outlined">add</span>
            Add step
          </button>
        </div>
      </Field>

      <div className="recipe-form__actions">
        <GhostButton label="Cancel" onClick={handleCancel} />
        <PrimaryButton
          type="submit"
          label={isEdit ? "Update Recipe" : "Save Recipe"}
          icon={isEdit ? "check" : "add"}
        />
      </div>
    </form>
  );
}
