import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import RecipeDisplay from "./RecipeDisplay";
import NewRecipeForm from "./NewRecipeForm"; 

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

  const handleRecipeSubmit = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="recipe-index-page">
      {selectedRecipe ? (
        <RecipeDisplay
          recipe={selectedRecipe}
          onClose={() => {
            setSelectedRecipe(null);
            setIsHeaderCollapsed(false);
          }}
        />
      ) : (
        <div className="row g-3 d-flex">
          {searchedRecipes.map((recipe) => (
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={recipe.id}>
              <div className="card h-100">
                <RecipeCard
                  key={recipe.id}
                  name={recipe.name}
                  image={recipe.image}
                  ingredients={recipe.ingredients.join(", ")}
                  onClick={() => handleRecipeClick(recipe)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
      <NewRecipeForm onRecipeSubmit={handleRecipeSubmit} />
    </div>
  );
}

export default RecipeIndex;