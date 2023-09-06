import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";

function RecipeIndex({ searchInput }) {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8001/recipes")
      .then((r) => r.json())
      .then(setRecipes);
  }, []);

  const searchedRecipes = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  const recipeCards = searchedRecipes.map((recipes) => {
    return (
      <RecipeCard
        key={recipe.id}
        name={recipes.name}
        image={recipe.image}
        ingredients={recipe.ingredients}
      />
    );
  });

  return { recipeCards };
}

export default RecipeIndex;
