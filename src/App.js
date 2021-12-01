import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Hands from "./Hands";
import "./App.css";
import { dealHands, loadDeck, drawCard } from "./actions";

const App = () => {
  const dispatch = useDispatch();
  const deck = useSelector((state) => state.deck);
  useEffect(() => {
    dispatch(loadDeck());
  }, [dispatch]);

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
          dispatch(drawCard(deck.deck_id));
        }}
      >
        Draw
      </button>

      {/* <Hands cards={dealersHand} />
      <Hands cards={playersHand} /> */}
    </div>
  );
};

export default App;
