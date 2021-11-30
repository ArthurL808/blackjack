import React, { useState, useEffect } from "react";
import Cards from "../Cards";

const Hands = ({ ...props }) => {
  const [handvalue, setHandvalue] = useState(0);

  return (
    <div>
      {/* {console.log(hand)} */}
      {/* {hand.total} */}
      <Cards cards={props.cards} />
    </div>
  );
};
export default Hands;
