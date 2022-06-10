import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RoundResults from "./RoundResults";
import BetWindow from "./BetWindow";
import GameBoard from "./GameBoard";

import "./App.css";
import {getDeckAction} from "./actions";
import {
  selectDeck,
  selectRoundResults,
  selectBettingRound,
} from "./selectors";

const App = () => {
  const dispatch = useDispatch();

  const deck = useSelector(selectDeck);
  const roundResults = useSelector(selectRoundResults);
  const bettingRound = useSelector(selectBettingRound);


  useEffect(() => {
    dispatch(getDeckAction());
  }, []);

  return (
    <div className="App">
      <h3>Black Jack App</h3>
      <RoundResults roundResults={roundResults} />
      {bettingRound ? (
        <BetWindow deck={deck} />
      ) : (
        <GameBoard deck={deck}/>
      )}
    </div>
  );
};

export default App;
