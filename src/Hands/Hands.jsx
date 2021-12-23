import React from "react";
import Cards from "../Cards";

const Hands = ({ ...props }) => {
  return (
    <div>
      <p>{props.total}</p>
      {props.cards.map((card) => {
        return <Cards key={card.code} card={card} />;
      })}
    </div>
  );
};
export default Hands;
