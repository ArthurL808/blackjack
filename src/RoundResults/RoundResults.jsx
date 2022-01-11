import React from "react";
import { useDispatch } from "react-redux";
import { startBettingRoundAction } from "../actions";

const RoundResults = ({ ...props }) => {

  const dispatch = useDispatch();

  return props.roundResults.roundEnd ? (
    <div>
      {props.roundResults.message}

      <button
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
