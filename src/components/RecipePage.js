import React, { useState } from "react";
import RecipeIndex from "./RecipeIndex";

function RecipePage() {
  const [searchInput, setSearchInput] = useState("");
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(false);
  return (
    <div>
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        isCollapsed={isHeaderCollapsed}
      />
      <RecipeIndex
        searchInput={searchInput}
        setIsHeaderCollapsed={setIsHeaderCollapsed}
      />
    </div>
  );
}

export default RecipePage;
