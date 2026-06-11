import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

export function useRecipes() {
  const ctx = useContext(RecipeContext);
  if (!ctx) throw new Error("useRecipes must be used within a RecipeProvider");
  return ctx;
}
