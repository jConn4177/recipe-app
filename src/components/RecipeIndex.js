import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import RecipeDisplay from "./RecipeDisplay";

function RecipeIndex({ searchInput }) {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

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

  const handleRecipeClick = (recipe) => {
    console.log("clicked");
    setSelectedRecipe(recipe);
  };

  return (
    <div>
      {selectedRecipe ? (
        <RecipeDisplay
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)} // Pass a function to close RecipeDisplay
        />
      ) : (
        searchedRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            name={recipe.name}
            image={recipe.image}
            ingredients={recipe.ingredients}
            onClick={() => handleRecipeClick(recipe)} // Pass a function to handle clicks
          />
        ))
      )}
    </div>
  );
}

export default RecipeIndex;
