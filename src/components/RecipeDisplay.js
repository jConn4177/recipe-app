import React from "react";

function RecipeDisplay({ recipe, onClose }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="img-fluid image-border"
          />
          <h2 className="p-3">{recipe.name}</h2>
        </div>
      </div>
      <div className="row">
        <div
          id="ingredients-div-container"
          className="col-lg-3 col-md-3 custom-border m-4"
        >
          <div className="ingredient-box bg-white">
            <h3>Ingredients:</h3>
            <ul className="list-unstyled">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
        <div
          id="instructions-div-container"
          className="container-fluid col-lg-6 col-md-6 custom-border m-4"
        >
          <div className="row">
            <div className="col-6">
              <h3>Instructions:</h3>
            </div>
            <div className="col-6 text-end">
              <button onClick={onClose} className="btn btn-light">
                Close Recipe
              </button>
            </div>
          </div>
          <div className="instruction-box bg-white">
            <ol>
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDisplay;
