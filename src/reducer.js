import { LOAD_DECK, DEAL_HANDS, DRAW_CARD } from "./actions";

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
        playersHand: {
          ...state.playersHand,
          cards: action.payload.playersHand,
        },
        dealersHand: {
          ...state.dealersHand,
          cards: action.payload.dealersHand,
        },
      };
    case DRAW_CARD:
      return {
        ...state,
        playersHand: {
          ...state.playersHand,
          cards: [...state.playersHand.cards, action.payload],
        },
      };
    default:
      return state;
  }
};

export default reducer;
