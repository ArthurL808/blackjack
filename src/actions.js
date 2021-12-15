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

  let playerTotal = convertCardsValueToNum(playerCardsResponse.cards);
  let dealersTotal = convertCardsValueToNum(dealersCardsResponse.cards);

  dispatch({
    type: DEAL_HANDS,
    payload: {
      playersCards: playerCardsResponse.cards,
      dealersCards: dealersCardsResponse.cards,
      playerTotal: playerTotal,
      dealersTotal: dealersTotal,
      remaining: dealersCardsResponse.remaining,
    },
  });
};

export const hitUser = (deckId, count) => async (dispatch) => {
  let card = await drawCards(deckId, count);
  let total = convertCardsValueToNum(card.cards);

  dispatch({
    type: HIT_USER,
    payload: { card: card.cards[0], total: total, remaining: card.remaining },
  });
};

const drawCards = (deckId, count) => {
  return axios
    .get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`)
    .then((res) => {
      console.log(res.data.cards);
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

const convertCardsValueToNum = (cards) => {
  return cards
    .map((card) => {
      if (isNaN(card.value)) {
        return 10;
      } else {
        return parseInt(card.value);
      }
    })
    .reduce((a, b) => {
      return a + b;
    });
};

// const updatePlayerValue = (valueArr) => (dispatch) => {};

// const updateAiValue = () => (dispatch) => {};
