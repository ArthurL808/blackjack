import React from "react";
import { useSelector } from "react-redux";

const RoundResults = ({ ...props }) => {
  const currentBet = useSelector((state) => state.currentBet);
  return (
    <div>
      <h4>Round Results</h4>
      {props.roundResults.playerLoss ? (
        <p>Sorry you've lost this round try again.</p>
      ) : null}
      {props.roundResults.playerWin ? (
        <p>You've Won ${currentBet}</p>
      ) : null}
      {props.roundResults.playerBlackjack ? (
        <p>BlackJack! congratz you've won insert amount here.</p>
      ) : null}
      {props.roundResults.playerPush ? (
        <p>You've pushed with the dealer.</p>
      ) : null}
      <button>Close</button>
    </div>
  );
};

export default RoundResults;
