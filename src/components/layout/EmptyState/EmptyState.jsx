import { useRecipes } from "../../../hooks/useRecipes";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";
import GhostButton from "../../common/GhostButton/GhostButton";
import "./EmptyState.css";

export default function EmptyState({ isFiltered }) {
  const { openAddPanel, setSearchQuery, setActiveTab } = useRecipes();

  function clearFilters() {
    setSearchQuery("");
    setActiveTab("all");
  }

  return (
    <div className="empty-state">
      <span className="material-symbols-outlined empty-state__icon">
        {isFiltered ? "search_off" : "menu_book"}
      </span>
      <h3 className="empty-state__heading">
        {isFiltered ? "No recipes found" : "Your kitchen is empty"}
      </h3>
      <p className="empty-state__body">
        {isFiltered
          ? "Try a different keyword or clear the search."
          : "Add your first recipe to get started."}
      </p>
      {isFiltered ? (
        <GhostButton label="Clear search" onClick={clearFilters} />
      ) : (
        <PrimaryButton label="Add Recipe" icon="add" onClick={openAddPanel} />
      )}
    </div>
  );
}
