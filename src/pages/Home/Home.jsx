import { useRecipes } from "../../hooks/useRecipes";
import { TABS } from "../../utils/constants";
import RecipeCard from "../../components/recipe/RecipeCard/RecipeCard";
import EmptyState from "../../components/layout/EmptyState/EmptyState";
import TopNavbar from "../../components/layout/TopNavbar/TopNavbar";
import RightPanel from "../../components/layout/RightPanel/RightPanel";
import Footer from "../../components/layout/Footer/Footer";
import "./Home.css";

export default function Home() {
  const { filteredRecipes, searchQuery, activeTab } = useRecipes();

  const isEmpty = filteredRecipes.length === 0;
  const isFiltered = !!searchQuery || activeTab === TABS.FAVORITES;

  const pageTitle = activeTab === TABS.FAVORITES ? "Favorites" : "All Recipes";
  const countLabel =
    filteredRecipes.length === 1
      ? "1 recipe"
      : `${filteredRecipes.length} recipes`;
  const searchLabel = searchQuery ? ` matching "${searchQuery}"` : "";

  return (
    <div className="home">
      <TopNavbar />

      <div className="home__layout">
        <main className="home__main">
          <div className="home__heading">
            <div>
              <h1 className="home__title">{pageTitle}</h1>
              <p className="home__count">
                {countLabel}
                {searchLabel}
              </p>
            </div>
          </div>

          <div className="home__grid">
            {isEmpty ? (
              <EmptyState isFiltered={isFiltered} />
            ) : (
              filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))
            )}
          </div>
        </main>
      </div>

      <Footer />
      <RightPanel />
    </div>
  );
}
