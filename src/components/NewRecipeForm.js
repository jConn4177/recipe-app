import React, { useState } from "react";

function NewRecipeForm({ onRecipeSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    ingredients: [""],
    instructions: [""],
  });

  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "ingredients" || name === "instructions" ? value.split("\n") : value,
    });
  };

  const handleAddItem = (itemName) => {
    setFormData({
      ...formData,
      [itemName]: [...formData[itemName], ""],
    });
  };

  const handleRemoveItem = (itemName, index) => {
    const updatedItems = [...formData[itemName]];
    updatedItems.splice(index, 1);
    setFormData({
      ...formData,
      [itemName]: updatedItems,
    });
  };

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...formData.ingredients];
    updatedIngredients[index] = value;
    setFormData({
      ...formData,
      ingredients: updatedIngredients,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRecipe = {
      name: formData.name,
      ingredients: formData.ingredients,
      instructions: formData.instructions,
      image: imageUrl,
    };

    try {
      const response = await fetch("http://localhost:8001/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      });

      if (response.ok) {
        console.log("Recipe submitted successfully");
        setFormData({
          name: "",
          ingredients: [""],
          instructions: [""],
        });
        setImageUrl("");

        // Call the onRecipeSubmit function to add the new recipe to the recipes state
        onRecipeSubmit(newRecipe); // Add this line
      } else {
        console.error("Failed to submit recipe");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="app-form">
      <h2 className="form-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="form-inputs">
        <div className="form-row">
          <div className="form-row-left">
            <div className="form-input">
              <label htmlFor="name">Recipe Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="instructions">Instructions:</label>
              {formData.instructions.map((instruction, index) => (
                <div key={index}>
                  <textarea
                    className="input-step"
                    placeholder="Add a Step..."
                    value={instruction}
                    onChange={(e) =>
                      handleChange({
                        target: { name: "instructions", value: e.target.value },
                      })
                    }
                  />
                  {formData.instructions.length > 1 && (
                    <button
                      className="remove-inst-button"
                      type="button"
                      onClick={() => handleRemoveItem("instructions", index)}
                    >
                      Remove Step
                    </button>
                  )}
                </div>
              ))}
              <button
                className="add-inst-button"
                type="button"
                onClick={() => handleAddItem("instructions")}
              >
                Add Next Step
              </button>
            </div>
          </div>
          <div className="form-row-right">
            <div className="form-input">
              <label htmlFor="ingredients">Ingredients:</label>
              {formData.ingredients.map((ingredient, index) => (
                <div key={index}>
                  <input
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
            <div className="form-input">
              <label htmlFor="imageUrl">Image URL:</label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button className="add-recipe-button" type="submit">
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default NewRecipeForm;