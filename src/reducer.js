import { LOAD_DECK, DEAL_HANDS, HIT_USER } from "./actions";

const initalState = {
  deck: { deck_id: "", remaining: 0, shuffled: false, success: false },
  playersHand: {
    cards: [],
    total: 0,
  },
  dealersHand: {
    cards: [],
    total: 0,
  },
};

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case LOAD_DECK:
      return { ...state, deck: action.payload };
    case DEAL_HANDS:
      return {
        ...state,
        deck: { ...state.deck, remaining: action.payload.remaining },
        playersHand: {
          ...state.playersHand,
          cards: action.payload.playersCards,
          total: action.payload.playerTotal,
        },
        dealersHand: {
          ...state.dealersHand,
          cards: action.payload.dealersCards,
          total: action.payload.dealersTotal,
        },
      };
    case HIT_USER:
      return {
        ...state,
        deck: { ...state.deck, remaining: action.payload.remaining },
        playersHand: {
          ...state.playersHand,
          cards: [...state.playersHand.cards, action.payload.card],
          total: state.playersHand.total + action.payload.total,
        },
      };
    default:
      return state;
  }
};

export default reducer;
