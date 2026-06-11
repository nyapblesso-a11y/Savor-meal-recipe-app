import { useEffect } from "react";
import { useRecipes } from "../../../hooks/useRecipes";
import { PANEL_MODES } from "../../../utils/constants";
import IconButton from "../../common/IconButton/IconButton";
import RecipeDetail from "../../recipe/RecipeDetail/RecipeDetail";
import RecipeForm from "../../recipe/RecipeForm/RecipeForm";
import "./RightPanel.css";

const PANEL_TITLES = {
  [PANEL_MODES.VIEW]: "Recipe Details",
  [PANEL_MODES.ADD]:  "New Recipe",
  [PANEL_MODES.EDIT]: "Edit Recipe",
};

export default function RightPanel() {
  const { isPanelOpen, panelMode, closePanel } = useRecipes();


  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && isPanelOpen) closePanel();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isPanelOpen, closePanel]);

  
  useEffect(() => {
    document.body.style.overflow = isPanelOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isPanelOpen]);

  return (
    <>
      
      <div
        className={`panel-backdrop${isPanelOpen ? " panel-backdrop--visible" : ""}`}
        onClick={closePanel}
      />

 
      <aside className={`right-panel${isPanelOpen ? " right-panel--open" : ""}`}>
        {isPanelOpen && (
          <>
            
            <div className="right-panel__header">
              <span className="right-panel__title">
                {PANEL_TITLES[panelMode] ?? "Details"}
              </span>
              <IconButton
                icon="close"
                variant="ghost"
                size="md"
                title="Close panel"
                onClick={closePanel}
              />
            </div>

            <div className="right-panel__body">
              {panelMode === PANEL_MODES.VIEW && <RecipeDetail />}
              {panelMode === PANEL_MODES.ADD  && <RecipeForm />}
              {panelMode === PANEL_MODES.EDIT && <RecipeForm />}
            </div>
          </>
        )}
      </aside>
    </>
  );
}
