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
    const searchTerm = searchInput.toLowerCase();
    return (
      recipe.name.toLowerCase().includes(searchTerm) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchTerm)
      )
    );
  });

  const recipeCards = searchedRecipes.map((recipe) => {
    return (
      <RecipeCard
        key={recipe.id}
        name={recipe.name}
        image={recipe.image}
        ingredients={recipe.ingredients}
      />
    );
  });

  return <>{recipeCards}</>;
}

export default RecipeIndex;
