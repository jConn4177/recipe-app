import React from "react";

function NewRecipeFormImage({ imageUrl, setImageUrl }) {
  return (
    <div className="form-input">
      <label htmlFor="recipeImageUrlInput">Image URL:</label>
      <input
        type="text"
        placeholder="Link an Image URL..."
        id="recipeImageUrlInput"
        name="imageUrl"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
    </div>
  );
}

export default NewRecipeFormImage;
