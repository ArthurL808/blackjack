import React from "react";

const Cards = ({ ...props }) => {
  return <img key={props.code} src={props.image} alt="playing card" />;
};

export default Cards;
