import React from "react";

const Cards = ({ ...props }) => {
  return (
    <div>
      {props.cards.map((card) => {
        return <img key={card.code} src={card.image} alt="playing card" />;
      })}
    </div>
  );
};

export default Cards;
