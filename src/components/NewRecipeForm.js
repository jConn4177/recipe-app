import React, { useState } from "react";

function NewRecipeForm() {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "ingredients") {
      // If the field is 'ingredients', split the input value by commas to create an array //
      setRecipe({ ...recipe, [name]: value.split(",") });
    } else {
      setRecipe({ ...recipe, [name]: value });
    }
  };

  const handleAddIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...recipe.ingredients];
    updatedIngredients[index] = value;
    setRecipe({ ...recipe, ingredients: updatedIngredients });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recipe submitted:", recipe);
    setRecipe({
      name: "",
      ingredients: [],
      instructions: "",
    });
  };

  return (
    <div>
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="app-form">
        <div>
          <label htmlFor="name">Recipe Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={recipe.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients:</label>
          {recipe.ingredients.map((ingredient, index) => (
            <input
              type="text"
              key={index}
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
            />
          ))}
          <button className="add-ing-button" type="button" onClick={handleAddIngredient}>
            Add Ingredient
          </button>
        </div>
        <div>
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            required
          />
        </div>
        <button className="add-recipe-button" type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default NewRecipeForm;
