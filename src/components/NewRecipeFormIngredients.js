import React from "react";

function NewRecipeFormIngredients({
  formData,
  handleIngredientChange,
  handleAddItem,
  handleRemoveItem,
}) {
  return (
    <div className="form-input">
      <label htmlFor="recipeIngredientsInput">Ingredients:</label>
      {formData.ingredients.map((ingredient, index) => (
        <div key={index}>
          <input
            id="recipeIngredientsInput"
            className="input-ingr"
            placeholder="Add an Ingredient..."
            type="text"
            value={ingredient}
            onChange={(e) => handleIngredientChange(index, e.target.value)}
          />
          {formData.ingredients.length > 1 && (
            <button
              className="remove-ing-button"
              type="button"
              onClick={() => handleRemoveItem("ingredients", index)}
            >
              Remove Ingredient
            </button>
          )}
        </div>
      ))}
      <button
        className="add-ing-button"
        type="button"
        onClick={() => handleAddItem("ingredients")}
      >
        Add Next Ingredient
      </button>
    </div>
  );
}

export default NewRecipeFormIngredients;
