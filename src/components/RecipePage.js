import React, { useState } from "react";
import RecipeIndex from "./RecipeIndex";

function RecipePage() {
  const [searchInput] = useState("");
  return (
    <div className="recipe-page">
      
      <RecipeIndex searchInput={searchInput} />
    </div>
  );
}

export default RecipePage;
