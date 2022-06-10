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
                dispatch(hitUserAction(props.deck, 1));
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
            <DoubleDown deckId={props.deck} playersCards={props.playersCards}/>
            
          </div>
    )
}

export default GameControls