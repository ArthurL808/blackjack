import React from 'react';
import {useDispatch} from 'react-redux'
import DoubleDown from "./DoubleDown";
import {hitUserAction, playerStandAction} from '../actions'

const GameControls = ({ ...props }) => {
    const dispatch = useDispatch()

    return (
        <div>
            <button
              onClick={() => {
                dispatch(hitUserAction(props.deckId, 1));
              }}
            >
              HIT
            </button>

            <button
              onClick={() => {
                dispatch(playerStandAction);
              }}
            >
              STAND
            </button>
            <DoubleDown deck_id={props.deckId} playersCards={props.playersCards}/>

            {/* {playerSplit ? <button>Split</button> : ""} */}
          </div>
    )
}

export default GameControls