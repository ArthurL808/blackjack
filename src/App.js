import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PlayerHand from "./PlayerHand";
import DealerHand from "./DealerHand";
import RoundResults from "./RoundResults";
import BetWindow from "./BetWindow";
import "./App.css";
import {
  hitUserAction,
  getDeckAction,
  playerStandAction,
  playerDoubleDownAction,
} from "./actions";
import {
  selectDeck,
  selectPlayersCards,
  selectDealersCards,
  selectPlayerTotal,
  selectDealerTotal,
  selectPlayerStand,
  selectRoundResults,
  selectBettingRound,
  selectPlayerSplit,
} from "./selectors";

const App = () => {
  const dispatch = useDispatch();

  const deck = useSelector(selectDeck);
  const playersCards = useSelector(selectPlayersCards);
  const dealersCards = useSelector(selectDealersCards);
  const playerTotal = useSelector(selectPlayerTotal);
  const dealerTotal = useSelector(selectDealerTotal);
  const roundResults = useSelector(selectRoundResults);
  const playerStand = useSelector(selectPlayerStand);
  const bettingRound = useSelector(selectBettingRound);
  const playerSplit = useSelector(selectPlayerSplit);

  useEffect(() => {
    dispatch(getDeckAction());
  }, []);

  return (
    <div className="App">
      <h3>Black Jack App</h3>
      {bettingRound ? (
        <BetWindow deckId={deck.deck_id} />
      ) : (
        <div>
          <div>
            <button
              onClick={() => {
                dispatch(hitUserAction(deck.deck_id, 1));
              }}
            >
              HIT
            </button>

            <button
              onClick={() => {
                dispatch(playerStandAction);
              }}
            >
              STAND
            </button>
            {playersCards.length > 2 ? (
              ""
            ) : (
              <button
                onClick={() => {
                  dispatch(playerDoubleDownAction(deck.deck_id));
                }}
              >
                Double Down
              </button>
            )}

            {playerSplit ? <button>Split</button> : ""}
          </div>

          <p>Cards remaining: {deck.remaining}</p>
          <DealerHand
            deckId={deck.deck_id}
            total={dealerTotal}
            cards={dealersCards}
            playerStand={playerStand}
            playerTotal={playerTotal}
          />
          <PlayerHand cards={playersCards} total={playerTotal} />
        </div>
      )}
      <RoundResults roundResults={roundResults} />
    </div>
  );
};

export default App;
