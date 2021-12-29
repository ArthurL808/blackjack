import { createSelector } from "@reduxjs/toolkit";

export const selectDeck = (state) => state.deck;

export const selectRoundResults = (state) => state.playerLost;

export const selectPlayerStand = (state) => state.playerStand;

export const selectPlayersCards = (state) => state.playersCards;

export const selectDealersCards = (state) => state.dealersCards;

export const selectPlayerTotal = createSelector(selectPlayersCards, (cards) => {
  let sortedCards = [...cards].sort((a, b) => {
    if (a.value === "ACE") {
      return 1;
    }
    if (b.value === "ACE") {
      return -1;
    }
    return a.value - b.value;
  });
  let total = sortedCards.reduce((acc, curr) => {
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

export const selectDealerTotal = createSelector(selectDealersCards, (cards) => {
  let sortedCards = [...cards].sort((a, b) => {
    if (a.value === "ACE") {
      return 1;
    }
    if (b.value === "ACE") {
      return -1;
    }
    return a.value - b.value;
  });
  let total = sortedCards.reduce((acc, curr) => {
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
