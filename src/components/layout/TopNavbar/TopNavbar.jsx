import { useRecipes } from "../../../hooks/useRecipes";
import { TABS } from "../../../utils/constants";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";
import "./TopNavbar.css";

export default function TopNavbar() {
  const {
    searchQuery, setSearchQuery,
    activeTab, setActiveTab,
    openAddPanel,
  } = useRecipes();

  return (
    <header className="navbar">
      <nav className="navbar__inner">

        <div className="navbar__brand">Savor</div>

        <div className="navbar__tabs">
          <button
            className={`navbar__tab${activeTab === TABS.ALL ? " navbar__tab--active" : ""}`}
            onClick={() => setActiveTab(TABS.ALL)}
          >
            All Recipes
          </button>
          <button
            className={`navbar__tab${activeTab === TABS.FAVORITES ? " navbar__tab--active" : ""}`}
            onClick={() => setActiveTab(TABS.FAVORITES)}
          >
            <span
              className="material-symbols-outlined navbar__tab-icon"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              favorite
            </span>
            Favorites
          </button>
        </div>

        <div className="navbar__search">
          <span className="material-symbols-outlined navbar__search-icon">search</span>
          <input
            className="navbar__search-input"
            type="text"
            placeholder="Search recipes…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              className="navbar__search-clear"
              onClick={() => setSearchQuery("")}
              title="Clear"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          )}
        </div>

        <div className="navbar__actions">
          <PrimaryButton label="New Recipe" icon="add" onClick={openAddPanel} />
          <div className="navbar__avatar">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-K_jWstrWeTsTYCNAJd1XjSNe9WEjH2V3hkF2u8Av1E9lMPZk8IcoqdjmzOpMVC2RhvDZdlp-TTFPc_rTczAF5VUSLxG8w6qyytgznhHZahLUs3C6jm-8LqHlNcEUPCoDeLt26a9ldvCmfaYVoeVlzgyQX65kjK86poU89HjsWir6bvH1VULU7aG-voEH598yCpTcTALeEU-8Dsk7H5xZEffsYXx6RofNl6fw84ILiyWShlfeF3ZbE4VKJ6yAFmqwTJg5nY5tbmA"
              alt="User profile"
            />
          </div>
        </div>

      </nav>
    </header>
  );
}
