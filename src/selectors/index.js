import { createSelector } from "@reduxjs/toolkit";

export const selectDeck = (state) => state.deck;

export const selectPlayersCards = (state) => state.playersCards;

export const selectDealersCards = (state) => state.dealersCards;

export const selectPlayerTotal = createSelector(selectPlayersCards, (cards) => {
  let total = [...cards]
    .sort((a, b) => {
      return a.value - b.value;
    })
    .reduce((acc, curr) => {
      console.log("ACC:", acc, "CURRENT:", curr.value);
      if (curr.value === "ACE" && acc > 10) {
        return acc + 1;
      }
      if (curr.value === "ACE" && acc <= 10) {
        return acc + 11;
      }
      if (isNaN(curr.value)) {
        return acc + 10;
      }
      return acc + parseInt(curr.value);
    }, 0);
  return total;
});
