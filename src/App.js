import React, { useEffect, useState } from "react";
import DealButton from "./DealButton";
import Hands from "./Hands";
import axios from "axios";
import "./App.css";

const App = () => {
  const [deck, setDeck] = useState({
    deck_id: "",
    remaining: 0,
    shuffled: false,
    success: false,
  });

  // const [draw, setDraw] = useState(false);
  const [playersHand, setPlayersHand] = useState([]);
  const [dealersHand, setDealersHand] = useState([]);

  useEffect(() => {
    axios
      .get("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
      .then((res) => {
        setDeck(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <h3>Black Jack App</h3>
      <DealButton
        deckId={deck.deck_id}
        setDealersHand={setDealersHand}
        setPlayersHand={setPlayersHand}
      />
      {/* {draw ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            axios
              .get(
                `http://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
              )
              .then((res) => {
                setPlayersHand([...playersHand, res.data.cards[0]]);
              })
              .catch((err) => {
                console.error(err);
              });
          }}
        >
          Hit
        </button>
      ) : null} */}
      <Hands cards={playersHand} />
      
      <Hands cards={dealersHand} />
    </div>
  );
};

export default App;
