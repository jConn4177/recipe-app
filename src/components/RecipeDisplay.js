import React from "react";

function RecipeDisplay({ recipe, onClose }) {
  return (
    <div>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} />
      <p>Ingredients: {recipe.ingredients.join(", ")}</p>
      <p>Instructions: {recipe.instructions}</p>
      <button onClick={onClose}>Close</button>{" "}
    </div>
  );
}

export default RecipeDisplay;
