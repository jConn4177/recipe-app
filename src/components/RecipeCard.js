import React from "react";

function RecipeCard({ name, image, ingredients, onClick }) {
  return (
    <div className="card h-100" onClick={onClick}>
      <img className="card-image" src={image} alt={name} />
      <div className="card-content">
        <h3 className="card-name">{name}</h3>
        <p className="card-ingred">{ingredients}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
