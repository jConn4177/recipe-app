import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import RecipeDisplay from "./RecipeDisplay";

function RecipeIndex({ searchInput, setIsHeaderCollapsed }) {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8001/recipes")
      .then((r) => r.json())
      .then(setRecipes);
  }, []);

  const searchWords = searchInput.toLowerCase().split(" ");
  const searchedRecipes = recipes.filter((recipe) => {
    return searchWords.every((word) => {
      const searchTerm = word.trim();
      return (
        recipe.name.toLowerCase().includes(searchTerm) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(searchTerm)
        )
      );
    });
  });

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setIsHeaderCollapsed(true);
  };

  return (
    <div>
      {selectedRecipe ? (
        <RecipeDisplay
          recipe={selectedRecipe}
          onClose={() => {
            setSelectedRecipe(null);
            setIsHeaderCollapsed(false);
          }} // Pass a function to close RecipeDisplay
        />
      ) : (
        <div className="row g-3 d-flex">
          {searchedRecipes.map((recipe) => (
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card h-100">
                <RecipeCard
                  key={recipe.id}
                  name={recipe.name}
                  image={recipe.image}
                  ingredients={recipe.ingredients.join(", ")}
                  onClick={() => handleRecipeClick(recipe)} // Pass a function to handle clicks
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecipeIndex;
