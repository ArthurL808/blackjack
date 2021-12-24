import React, { useEffect } from "react";
import Cards from "../Cards";
import { useDispatch } from "react-redux";
import { playerBust, playerBlackjack } from "../actions";
const Hands = ({ ...props }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    checkForBlackjack(props.cards, props.total);
    checkForBust(props.total);
  }, [props.total, props.cards]);

  const checkForBust = (total) => {
    if (total > 21) {
      dispatch(playerBust);
    }
  };

  const checkForBlackjack = (cards, total) => {
    if (cards.length === 2 && total === 21) {
      return dispatch(playerBlackjack);
    }
  };
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
