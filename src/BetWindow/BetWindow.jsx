import React, { useState } from "react";
import Styles from "./BetWindow.module.css"
import { useSelector } from "react-redux";
import { placeBetAction, dealHandsAction } from "../actions";
import { selectPlayerCurrency } from "../selectors";
import { useDispatch } from "react-redux";

const BetWindow = ({ ...props }) => {
  const dispatch = useDispatch();
  const [bet, setBet] = useState(0);
  const playerCurrency = useSelector(selectPlayerCurrency);

  return (
    <div className={Styles.betWindow}>
      <h4>Player's wallet: ${playerCurrency - bet}</h4>
      <h5>Current Bet: ${bet}</h5>
      <div className={Styles.betMenu}>
      <button className={Styles.betButton}
        onClick={() => {
          bet + 50 > playerCurrency ? alert("Not enought funds.") : setBet(bet + 50);
        }}
        >
        $50
      </button>
      <button className={Styles.betButton}
        onClick={() => {
          bet + 100 > playerCurrency ? alert("Not enought funds.") : setBet(bet + 100);
          
        }}
        >
        $100
      </button>
      <button className={Styles.betButton}
        onClick={() => {
          bet + 250 > playerCurrency ? alert("Not enought funds.") : setBet(bet + 250);
        }}
        >
        $250
      </button>
      <button className={Styles.betButton}
        onClick={() => {
          bet + 500 > playerCurrency ? alert("Not enought funds.") : setBet(bet + 500);
        }}
        >
        $500
      </button>
      <button id={Styles.placeBet} className={Styles.betButton}
        onClick={() => {
          if (bet <= 0) {
            return alert("Please place a bet.");
          }
          if (playerCurrency - bet < 0) {
            return alert("You don't have the money to place that bet.");
          }
          dispatch(placeBetAction(bet));
          setBet(0);
          dispatch(dealHandsAction(props.deck));
        }}
        >
        Deal
      </button>
      <button id={Styles.clearBet} className={Styles.betButton} 
      onClick={()=>{
        setBet(0)
      }}>Clear Bet</button>
      </div>
    </div>
  );
};

export default BetWindow;
