import React from "react";


const RoundResults = ({ ...props }) => {

  return props.roundResults.roundEnd ? (
    <div>
      {props.roundResults.message}

      <button>close</button>
    </div>
  ) : (
    ""
  );
};

export default RoundResults;
