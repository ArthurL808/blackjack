import React from "react";
import Styles from './RoundResults.module.css'
import { useDispatch } from "react-redux";
import { startBettingRoundAction } from "../actions";

const RoundResults = ({ ...props }) => {

  const dispatch = useDispatch();

  return props.roundResults.roundEnd ? (
    <div className={Styles.resultWindow}>
      {props.roundResults.message}

      <button className={Styles.closeResults}
        onClick={() => {
          dispatch(startBettingRoundAction);
        }}
      >
        close
      </button>
    </div>
  ) : (
    ""
  );
};

export default RoundResults;
