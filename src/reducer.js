import { LOAD_DECK, DEAL_HANDS, HIT_USER } from "./actions";

const initalState = {
  deck: { deck_id: "", remaining: 0, shuffled: false, success: false },
  playersCards: [],
  dealersCards: [],
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
    default:
      return state;
  }
};

export default reducer;
