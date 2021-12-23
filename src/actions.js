import axios from "axios";

export const HIT_USER = "HIT_USER";
export const LOAD_DECK = "LOAD_DECK";
export const DEAL_HANDS = "DEAL_HANDS";

export const getDeckAction = () => (dispatch) => {
  axios
    .get("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
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

export const dealHands = (deckId) => async (dispatch) => {
  let playerCardsResponse = await drawCards(deckId, 2);
  let dealersCardsResponse = await drawCards(deckId, 2);
  dispatch({
    type: DEAL_HANDS,
    payload: {
      playersCards: playerCardsResponse.cards,
      dealersCards: dealersCardsResponse.cards,
      remaining: dealersCardsResponse.remaining,
    },
  });
};

export const hitUser = (deckId, count) => async (dispatch) => {
  let cardResponse = await drawCards(deckId, count);

  dispatch({
    type: HIT_USER,
    payload: { card: cardResponse.cards[0], remaining: cardResponse.remaining },
  });
};

const drawCards = (deckId, count) => {
  return axios
    .get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`)
    .then((res) => {
      
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

const convertCardsValueToNum = (card) => {
  if (card.value === "ACE") {
    return 11;
  }
  return isNaN(card.value) ? 10 : parseInt(card.value);
};

