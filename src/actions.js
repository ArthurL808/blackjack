import axios from "axios";

export const DRAW_CARD = "DRAW_CARD";
export const LOAD_DECK = "LOAD_DECK";
export const DEAL_HANDS = "DEAL_HANDS";

export const loadDeck = () => (dispatch) => {
  axios
    .get("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
    .then((res) => {
      dispatch({
        type: LOAD_DECK,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const dealHands = (deckId) => (dispatch) => {
  axios
    .get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`)
    .then((res) => {
      let dealersCards = res.data.cards.slice(0, 2);
      let playersCards = res.data.cards.slice(2);
      dispatch({
        type: DEAL_HANDS,
        payload: {
          playersHand: playersCards,
          dealersHand: dealersCards,
        },
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const drawCard = (deckId) => (dispatch) => {
  axios
    .get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then((res) => {
      dispatch({
        type: DRAW_CARD,
        payload: res.data.cards[0],
      });
    })
    .catch((err) => {
      console.error(err);
    });
};
