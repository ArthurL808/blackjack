import React from "react";
import Cards from "../Cards";

const Hands = ({ ...props }) => {
  return (
    <div>
      <p>{props.hand.total}</p>
      {props.hand.cards.map((card) => {
        return <Cards key={card.code} image={card.image} />;
      })}
    </div>
  );
};
export default Hands;
