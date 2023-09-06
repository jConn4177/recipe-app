import React, { useState } from "react";
import Header from "./Header";
import RecipeIndex from "./RecipeIndex";

function RecipePage() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div>
      <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      <RecipeIndex searchInput={searchInput} />
    </div>
  );
}

export default RecipePage;
