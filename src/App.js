import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PlayerHand from "./PlayerHand";
import DealerHand from "./DealerHand";
import RoundResults from "./RoundResults/RoundResults";
import "./App.css";
import {
  dealHandsAction,
  hitUserAction,
  getDeckAction,
  playerStandAction,
} from "./actions";
import {
  selectDeck,
  selectPlayersCards,
  selectDealersCards,
  selectPlayerTotal,
  selectDealerTotal,
  selectPlayerStand,
  selectRoundResults,
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

  useEffect(() => {
    dispatch(getDeckAction());
  }, []);

  return (
    <div className="App">
      <h3>Black Jack App</h3>
      <button
        onClick={() => {
          dispatch(dealHandsAction(deck.deck_id));
        }}
      >
        Deal
      </button>
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
      <p>Cards remaining: {deck.remaining}</p>
      <DealerHand
        deckId={deck.deck_id}
        total={dealerTotal}
        cards={dealersCards}
        playerStand={playerStand}
        playerTotal={playerTotal}
      />
      <PlayerHand cards={playersCards} total={playerTotal} />

      <RoundResults roundResults={roundResults} />
    </div>
  );
};

export default App;
