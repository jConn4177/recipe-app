import React, { useState } from "react";
import NewRecipeFormName from "./NewRecipeFormName";
import NewRecipeFormInstructions from "./NewRecipeFormInstructions";

function NewRecipeForm({
  onRecipeSubmit,
  isFormCollapsed,
  setIsFormCollapsed,
  isCollapsed,
}) {
  const [formData, setFormData] = useState({
    name: "",
    ingredients: [""],
    instructions: [""],
  });

  const [imageUrl, setImageUrl] = useState("");
  const [recipeName, setRecipeName] = useState("");

  const handleInstructionChange = (index, value) => {
    const updatedInstructions = [...formData.instructions];
    updatedInstructions[index] = value;
    setFormData({
      ...formData,
      instructions: updatedInstructions,
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
      name: recipeName,
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

        onRecipeSubmit(newRecipe);
      } else {
        console.error("Failed to submit recipe");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div
      style={{ display: isCollapsed ? "none" : "" }}
      className={`app-form ${isFormCollapsed ? "form-collapsed" : ""}`}
    >
      <h2 className="form-title">Add a New Recipe</h2>
      {!isFormCollapsed && (
        <>
          <form onSubmit={handleSubmit} className="form-inputs">
            <div className="form-row">
              <div className="form-row-left">
                <NewRecipeFormName
                  recipeName={recipeName}
                  setRecipeName={setRecipeName}
                />
                <NewRecipeFormInstructions
                  formData={formData}
                  handleInstructionChange={handleInstructionChange}
                  handleRemoveItem={handleRemoveItem}
                  handleAddItem={handleAddItem}
                />
              </div>
              <div className="form-row-right">
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
                        onChange={(e) =>
                          handleIngredientChange(index, e.target.value)
                        }
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
                  <label htmlFor="recipeImageUrlInput">Image URL:</label>
                  <input
                    type="text"
                    id="recipeImageUrlInput"
                    name="imageUrl"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button className="btn add-recipe-button" type="submit">
              Add Recipe
            </button>
          </form>
        </>
      )}
      <button
        className="toggle-form-button"
        type="button"
        onClick={() => setIsFormCollapsed(!isFormCollapsed)}
      >
        {isFormCollapsed ? "Open Form" : "Close Form"}
      </button>
    </div>
  );
}

export default NewRecipeForm;
