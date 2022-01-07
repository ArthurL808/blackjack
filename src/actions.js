import axios from "axios";

export const HIT_USER = "HIT_USER";
export const LOAD_DECK = "LOAD_DECK";
export const DEAL_HANDS = "DEAL_HANDS";
export const PLAYER_LOSS = "PLAYER_LOSS";
export const PLAYER_BLACKJACK = "PLAYER_BLACKJACK";
export const HIT_DEALER = "HIT_DEALER";
export const PLAYER_STAND = "PLAYER_STAND";
export const PLAYER_WIN = "PLAYER_WIN";
export const PLAYER_PUSH = "PLAYER_PUSH";
export const PLACE_BET = "PLACE_BET";

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

export const dealHandsAction = (deckId) => async (dispatch) => {
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

export const hitUserAction = (deckId, count) => async (dispatch) => {
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

export const dealerDrawAction = (deckId, count) => async (dispatch) => {
  let cardResponse = await drawCards(deckId, count);
  dispatch({
    type: HIT_DEALER,
    payload: {
      card: cardResponse.cards[0],
      remaining: cardResponse.remaining,
    },
  });
};

export const placeBetAction = (bet) => (dispatch) => {
  dispatch({
    type: PLACE_BET,
    payload: bet,
  });
};

export const playerStandAction = (dispatch) => {
  return dispatch({
    type: PLAYER_STAND,
    payload: true,
  });
};

export const playerLossAction = (dispatch) => {
  return dispatch({
    type: PLAYER_LOSS,
    payload: true,
    message: "Sorry you've lost $"
  });
};

export const playerBlackjackAction = (dispatch) => {
  return dispatch({
    type: PLAYER_BLACKJACK,
    payload: true,
    message: 'Blackjack! you have won $'
  });
};

export const playerWinAction = (dispatch) => {
  return dispatch({
    type: PLAYER_WIN,
    payload: true,
    message: 'Congratulations you have won $'
  });
};

export const playerPushAction = (dispatch) => {
  return dispatch({
    type: PLAYER_PUSH,
    payload: true,
    message: "Nothing gained, Nothing loss you have pushed with the dealer."
  });
};
