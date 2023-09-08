import React from "react";

function NewRecipeFormInstructions({
  formData,
  handleInstructionChange,
  handleRemoveItem,
  handleAddItem,
}) {
  return (
    <div className="form-input">
      <label htmlFor="recipeInstructionsInput">Instructions:</label>
      {formData.instructions.map((instruction, index) => (
        <div key={index}>
          <textarea
            type="text"
            id="recipeInstructionsInput"
            className="input-step"
            placeholder="Add a Step..."
            value={instruction}
            onChange={(e) => handleInstructionChange(index, e.target.value)}
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
  );
}

export default NewRecipeFormInstructions;
