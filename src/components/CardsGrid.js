import React from "react";
import Card from "./Card";
import './CardsGrid.css';


export default function CardsGrid(props) {
  const cards = props.cards;

  return (
    <div className="cards">
      <div className="cards-wrapper">
      <div className="cards-container">
        {cards.map((card, index) => {
         return <Card card={card} key={index} />;
        })}
      </div>
      </div>
    </div>
  );
}
