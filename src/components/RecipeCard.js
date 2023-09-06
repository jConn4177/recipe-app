import React from "react";

function RecipeCard({ key, name, image, ingredients }) {
  return (
    <div>
      <h1>Card Layout</h1>
      <div className="card-container">
        <div className="card" key={key}>
          <img src={image} alt={name} />
          <div className="card-content">
            <h3>{name}</h3>
            <p>{ingredients}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
