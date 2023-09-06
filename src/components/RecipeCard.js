import React from "react";

function RecipeCard({ key, name, image, ingredients }) {
  return (
        <div className="card" key={key}>
          <img className="card-image" src={image} alt={name} />
          <div className="card-content">
            <h3 className="card-name">{name}</h3>
            <p className="card-ingred">{ingredients}</p>
          </div>
        </div>   
  );
}

export default RecipeCard;
