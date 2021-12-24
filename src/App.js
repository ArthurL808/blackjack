import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Hands from "./Hands";
import "./App.css";
import { dealHands, hitUser, getDeckAction } from "./actions";
import {
  selectDeck,
  selectPlayersCards,
  selectDealersCards,
  selectPlayerTotal,
  selectDealerTotal
} from "./selectors";

const App = () => {
  const dispatch = useDispatch();

  const deck = useSelector(selectDeck);
  const playersCards = useSelector(selectPlayersCards);
  const dealersCards = useSelector(selectDealersCards);
  const playerTotal = useSelector(selectPlayerTotal);

  const dealerTotal = useSelector(selectDealerTotal)

  useEffect(() => {
    dispatch(getDeckAction());
  }, []);

  return (
    <div className="App">
      <h3>Black Jack App</h3>
      <button
        onClick={() => {
          dispatch(dealHands(deck.deck_id));
        }}
      >
        Deal
      </button>
      <button
        onClick={() => {
          dispatch(hitUser(deck.deck_id, 1));
        }}
      >
        HIT
      </button>
      <button onClick={()=>{
        
        }}>STAND</button>
      <p>Cards remaining: {deck.remaining}</p>
      <Hands cards={dealersCards} />
      <Hands cards={playersCards} total={playerTotal} />
    </div>
  );
};

export default App;
