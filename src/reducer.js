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
} from "./actions";

const initalState = {
  deck: { deck_id: "", remaining: 0, shuffled: false, success: false },
  playersCards: [],
  dealersCards: [],
  playerWin: false,
  playerLost: false,
  playerBlackjack: false,
  playerStand: false,
  playerPush: false,
};

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case LOAD_DECK:
      return { ...state, deck: action.payload };
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
      return { ...state, playerLost: action.payload };
    case PLAYER_BLACKJACK:
      return { ...state, playerBlackjack: action.payload };
    case PLAYER_STAND:
      return {
        ...state,
        playerStand: action.payload,
      };
    case PLAYER_WIN:
      return {
        ...state,
        playerWin: action.payload,
      };
    case PLAYER_PUSH:
      return { ...state, playerPush: action.payload };
    default:
      return state;
  }
};

export default reducer;
