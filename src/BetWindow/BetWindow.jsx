import React, { useState } from "react";
import { useSelector } from "react-redux";
import { placeBetAction, dealHandsAction } from "../actions";
import { selectPlayerCurrency } from "../selectors";
import { useDispatch } from "react-redux";
const BetWindow = ({ ...props }) => {
  const dispatch = useDispatch();
  const [bet, setBet] = useState(0);
  const playerCurrency = useSelector(selectPlayerCurrency);

  return (
    <div>
      Bet Window
      <h4>Player's wallet: {playerCurrency - bet}</h4>
      <h5>Current Bet: {bet}</h5>
      <button
        onClick={() => {
          setBet(50);
        }}
      >
        50
      </button>
      <button
        onClick={() => {
          setBet(100);
        }}
      >
        100
      </button>
      <button
        onClick={() => {
          setBet(250);
        }}
      >
        250
      </button>
      <button
        onClick={() => {
          setBet(500);
        }}
      >
        500
      </button>
      <button
        onClick={() => {
          if (bet <= 0) {
            alert("Please place a bet.");
          }
          dispatch(placeBetAction(bet));
          setBet(0);
          dispatch(dealHandsAction(props.deckId));
        }}
      >
        Confirm Bet.
      </button>
    </div>
  );
};

export default BetWindow;
