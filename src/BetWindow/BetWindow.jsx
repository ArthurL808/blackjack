import React, { useState } from "react";
import { placeBetAction } from "../actions";
import { useDispatch } from "react-redux";
const BetWindow = ({ ...props }) => {
  const [bet, setBet] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
      Bet Window
      <h4>Current Bet: {bet}</h4>
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
          dispatch(placeBetAction(bet));
          setBet(0);
        }}
      >
        Confirm Bet.
      </button>
    </div>
  );
};

export default BetWindow;
