import React from "react";

const Cards = ({ ...props }) => {
  
  return <img key={props.code} src={props.card.image} alt="playing card" />;
};

export default Cards;
