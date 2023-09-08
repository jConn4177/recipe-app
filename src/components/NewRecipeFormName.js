import React from "react";

function NewRecipeFormName({ recipeName, setRecipeName }) {
  return (
    <div className="form-input">
      <label htmlFor="recipeNameInput">Recipe Name:</label>
      <input
        type="text"
        placeholder="Choose a Recipe Name..."
        id="recipeNameInput"
        name="name"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        required
      />
    </div>
  );
}

export default NewRecipeFormName;
