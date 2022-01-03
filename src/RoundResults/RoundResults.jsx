import React from "react";

const RoundResults = ({ ...props }) => {
  return (
    <div>
      <h4>Round Results</h4>
      {props.roundResults.playerLoss ? (
        <p>Sorry you've lost this round try again.</p>
      ) : null}
      {props.roundResults.playerWin ? (
        <p>You've Won this round and 'insert amount here'</p>
      ) : null}
      {props.roundResults.playerBlackjack ? (
        <p>BlackJack! congratz you've won insert amount here.</p>
      ) : null}
    </div>
  );
};

export default RoundResults;
