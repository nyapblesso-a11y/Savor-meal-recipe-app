import { useState } from "react";
import { RecipeProvider } from "./context/RecipeContext";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";

export default function App() {
  const [page, setPage] = useState("landing"); 

  return (
    <RecipeProvider>
      {page === "landing" ? (
        <Landing onEnter={() => setPage("home")} />
      ) : (
        <Home />
      )}
    </RecipeProvider>
  );
}
