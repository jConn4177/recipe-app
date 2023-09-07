import React, { useState } from "react";

function NewRecipeForm() {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [""],
    instructions: [""],
  });

  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "ingredients") {
      setRecipe({ ...recipe, [name]: value.split(",") });
    } else if (name === "instructions") {
      setRecipe({ ...recipe, [name]: value.split("\n") });
    } else {
      setRecipe({ ...recipe, [name]: value });
    }
  };

  const handleAddIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = [...recipe.ingredients];
    updatedIngredients.splice(index, 1);
    setRecipe({ ...recipe, ingredients: updatedIngredients });
  };

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...recipe.ingredients];
    updatedIngredients[index] = value;
    setRecipe({ ...recipe, ingredients: updatedIngredients });
  };

  const handleAddInstruction = () => {
    setRecipe({ ...recipe, instructions: [...recipe.instructions, ""] });
  };

  const handleRemoveInstruction = (index) => {
    const updatedInstructions = [...recipe.instructions];
    updatedInstructions.splice(index, 1);
    setRecipe({ ...recipe, instructions: updatedInstructions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      name: recipe.name,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      image: imageUrl,
    };

    fetch("http://localhost:8001/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Recipe submitted successfully");
          setRecipe({
            name: "",
            ingredients: [""],
            instructions: [""],
          });
          setImageUrl("");
        } else {
          console.error("Failed to submit recipe");
        }
      })
  };

  return (
    <div className="app-form">
      <h2 className="form-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="form-inputs">
        <div className="form-row">
          <div className="form-row-left">
            <div className="add-name-input">
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
            <div className="add-inst-input">
              <label htmlFor="instructions">Instructions:</label>
              {recipe.instructions.map((instruction, index) => (
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
                  {recipe.instructions.length > 1 && (
                    <button
                      className="remove-inst-button"
                      type="button"
                      onClick={() => handleRemoveInstruction(index)}
                    >
                      Remove Step
                    </button>
                  )}
                </div>
              ))}
              <button
                className="add-inst-button"
                type="button"
                onClick={handleAddInstruction}
              >
                Add Next Step
              </button>
            </div>
          </div>
          <div className="form-row-right">
            <div className="add-ingr-input">
              <label htmlFor="ingredients">Ingredients:</label>
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index}>
                  <input
                  className="input-ingr"
                  placeholder="Add an Ingredient..."
                    type="text"
                    value={ingredient}
                    onChange={(e) => handleIngredientChange(index, e.target.value)}
                  />
                  {recipe.ingredients.length > 1 && (
                    <button
                      className="remove-ing-button"
                      type="button"
                      onClick={() => handleRemoveIngredient(index)}
                    >
                      Remove Ingredient
                    </button>
                  )}
                </div>
              ))}
              <button
                className="add-ing-button"
                type="button"
                onClick={handleAddIngredient}
              >
                Add Next Ingredient
              </button>
            </div>
            <div className="add-image-input">
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