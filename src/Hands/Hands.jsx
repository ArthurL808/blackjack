import React, { useState, useEffect } from "react";
import Cards from "../Cards";

const Hands = ({ ...props }) => {
  const [handvalue, setHandvalue] = useState(0);

  return (
    <div>
      {handvalue}
      {props.cards.map((card) => {
        return <Cards code={card.code} image={card.image} />;
      })}
    </div>
  );
};
export default Hands;
