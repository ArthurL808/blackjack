import React, { useEffect } from "react";
import Styles from './PlayerHand.module.css';
import Cards from "../Cards";
import { useDispatch } from "react-redux";
import { playerLossAction, playerBlackjackAction } from "../actions";
const PlayerHand = ({ ...props }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    checkForBlackjack(props.cards, props.total);
    checkForBust(props.total);
  }, [props.total, props.cards]);// eslint-disable-line react-hooks/exhaustive-deps

  const checkForBust = (total) => {
    if (total > 21) {
      dispatch(playerLossAction);
    }
  };

  const checkForBlackjack = (cards, total) => {
    if (cards.length === 2 && total === 21) {
      return dispatch(playerBlackjackAction);
    }
  };
  return (
    <>
      <p>{props.total}</p>
    <div className={Styles.playerHand}>
      {props.cards.map((card) => {
        return <Cards key={card.code} card={card} />;
      })}
    </div>
      </>
  );
};
export default PlayerHand;
