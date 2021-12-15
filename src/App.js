import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Hands from "./Hands";
import "./App.css";
import { dealHands, hitUser, getDeckAction } from "./actions";

const App = () => {
  
  const dispatch = useDispatch();

  const deck = useSelector((state) => state.deck);
  const playersHand = useSelector((state) => state.playersHand);
  const dealersHand = useSelector((state) => state.dealersHand);

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
      <p>Cards remaining: {deck.remaining}</p>
      <Hands hand={dealersHand} />
      <Hands hand={playersHand} />
    </div>
  );
};

export default App;
