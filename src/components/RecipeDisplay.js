import React from "react";

function RecipeDisplay({ recipe, onClose }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <img src={recipe.image} alt={recipe.name} className="img-fluid" />
          <h2>{recipe.name}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-3">
          <div className="ingredient-box">
            <h3>Ingredients:</h3>
            <ul className="list-unstyled">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="instruction-box">
            <h3>Instructions:</h3>
            <ol>
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <button onClick={onClose} className="btn btn-light">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeDisplay;
