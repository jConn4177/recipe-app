import React from "react";

function RecipeCard() {
  const cards = [
    {
      id: 1,
      name: "Chicken Katsu Curry",
      ingredients: "",
      imageSrc: "image1.jpg",
    },
    {
      id: 2,
      name: "Chicken Adobo",
      ingredients: "",
      imageSrc: "image2.jpg",
    },
    {
      id: 3,
      name: "Shrimp Fried Rice",
      ingredients: "",
      imageSrc: "image3.jpg",
    },
    {
      id: 4,
      name: "Card 4",
      ingredients: "",
      imageSrc: "image4.jpg",
    },
  ];
  return (
    <div>
      <h1>Card Layout</h1>
      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.imageSrc} alt={card.title} />
            <div className="card-content">
              <h3>{card.name}</h3>
              <p>{card.ingredients}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeCard;
