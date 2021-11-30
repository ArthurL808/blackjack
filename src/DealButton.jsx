import React from "react";
import axios from "axios";

const DealButton = ({ ...props }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        axios
          .get(
            `http://deckofcardsapi.com/api/deck/${props.deckId}/draw/?count=4`
          )
          .then((res) => {
            let dealersCards = res.data.cards.slice(0, 2);
            let playersCards = res.data.cards.slice(2);
            props.setDealersHand(dealersCards);
            props.setPlayersHand(playersCards);
          })
          .catch((err) => {
            console.error(err);
          });
      }}
    >
      Deal
    </button>
  );
};

export default DealButton;
