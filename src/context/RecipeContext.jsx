import { createContext, useState, useCallback, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { SAMPLE_RECIPES } from "../data/sampleRecipes";
import { STORAGE_KEY, PANEL_MODES, TABS } from "../utils/constants";

export const RecipeContext = createContext(null);

export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useLocalStorage(STORAGE_KEY, SAMPLE_RECIPES);

  const [selectedId, setSelectedId] = useState(null);
  const [panelMode, setPanelMode]   = useState(PANEL_MODES.VIEW);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab]     = useState(TABS.ALL);

  const filteredRecipes = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return recipes.filter((r) => {
      const matchesSearch =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.description?.toLowerCase().includes(q);
      const matchesTab =
        activeTab === TABS.ALL ||
        (activeTab === TABS.FAVORITES && r.favorite);
      return matchesSearch && matchesTab;
    });
  }, [recipes, searchQuery, activeTab]);

  const selectedRecipe = useMemo(
    () => recipes.find((r) => r.id === selectedId) ?? null,
    [recipes, selectedId]
  );

  const isPanelOpen = selectedId !== null || panelMode === PANEL_MODES.ADD;

  const addRecipe = useCallback((data) => {
    const newRecipe = { ...data, id: Date.now().toString(), favorite: false };
    setRecipes((prev) => [newRecipe, ...prev]);
    setSelectedId(newRecipe.id);
    setPanelMode(PANEL_MODES.VIEW);
  }, [setRecipes]);

  const updateRecipe = useCallback((id, data) => {
    setRecipes((prev) => prev.map((r) => (r.id === id ? { ...r, ...data } : r)));
    setPanelMode(PANEL_MODES.VIEW);
  }, [setRecipes]);

  const deleteRecipe = useCallback((id) => {
    setRecipes((prev) => prev.filter((r) => r.id !== id));
    setSelectedId(null);
    setPanelMode(PANEL_MODES.VIEW);
  }, [setRecipes]);

  const toggleFavorite = useCallback((id) => {
    setRecipes((prev) =>
      prev.map((r) => (r.id === id ? { ...r, favorite: !r.favorite } : r))
    );
  }, [setRecipes]);

  const openAddPanel = useCallback(() => {
    setSelectedId(null);
    setPanelMode(PANEL_MODES.ADD);
  }, []);

  const openEditPanel = useCallback(() => {
    setPanelMode(PANEL_MODES.EDIT);
  }, []);

  const openViewPanel = useCallback((id) => {
    setSelectedId(id);
    setPanelMode(PANEL_MODES.VIEW);
  }, []);

  const closePanel = useCallback(() => {
    setSelectedId(null);
    setPanelMode(PANEL_MODES.VIEW);
  }, []);

  const value = {
    recipes,
    filteredRecipes,
    selectedRecipe,
    selectedId,
    panelMode,
    searchQuery,
    activeTab,
    isPanelOpen,
    setSearchQuery,
    setActiveTab,
    addRecipe,
    updateRecipe,
    deleteRecipe,
    toggleFavorite,
    openAddPanel,
    openEditPanel,
    openViewPanel,
    closePanel,
  };

  return (
    <RecipeContext.Provider value={value}>
      {children}
    </RecipeContext.Provider>
  );
}
