import {
  LOAD_DECK,
  DEAL_HANDS,
  HIT_USER,
  HIT_DEALER,
  PLAYER_LOSS,
  PLAYER_BLACKJACK,
  PLAYER_STAND,
  PLAYER_WIN,
  PLAYER_PUSH,
  PLACE_BET,
} from "./actions";

const initalState = {
  deck: { deck_id: "", remaining: 0, shuffled: false, success: false },
  playersCards: [],
  playerCurrency: 1000,
  currentBet: 0,
  dealersCards: [],
  playerStand: false,
  bettingRound: true,
  roundResults: {
    roundEnd: false,
    message: "",
  },
};

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case LOAD_DECK:
      return { ...state, deck: action.payload };
    case PLACE_BET:
      return {
        ...state,
        bettingRound: false,
        playerCurrency: state.playerCurrency - action.payload,
        currentBet: action.payload,
      };
    case DEAL_HANDS:
      return {
        ...state,
        deck: { ...state.deck, remaining: action.payload.remaining },
        playersCards: action.payload.playersCards,
        dealersCards: action.payload.dealersCards,
      };
    case HIT_USER:
      return {
        ...state,
        deck: { ...state.deck, remaining: action.payload.remaining },
        playersCards: [...state.playersCards, action.payload.card],
      };
    case HIT_DEALER:
      return {
        ...state,
        deck: {
          ...state.deck,
          remaining: action.payload.remaining,
        },
        dealersCards: [...state.dealersCards, action.payload.card],
      };
    case PLAYER_LOSS:
      return {
        ...state,
        roundResults: {
          ...state.roundResults,
          roundEnd: action.payload,
          message: action.message + state.currentBet,
        },
      };
    case PLAYER_BLACKJACK:
      return {
        ...state,
        roundResults: {
          ...state.roundResults,
          roundEnd: action.payload,
          message: action.message + state.currentBet * 1.5,
        },
        playerCurrency:
          state.playerCurrency + (state.currentBet + state.currentBet * 1.5),
      };
    case PLAYER_STAND:
      return {
        ...state,
        playerStand: action.payload,
      };
    case PLAYER_WIN:
      return {
        ...state,
        roundResults: {
          ...state.roundResults,
          roundEnd: action.payload,
          message: action.message + state.currentBet,
        },
        playerCurrency: state.playerCurrency + state.currentBet * 2,
      };
    case PLAYER_PUSH:
      return {
        ...state,
        roundResults: {
          ...state.roundResults,
          roundEnd: action.payload,
          message: action.message,
        },
        playerCurrency: state.playerCurrency + state.currentBet,
      };
    default:
      return state;
  }
};

export default reducer;
