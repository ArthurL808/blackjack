import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {playerDoubleDownAction} from '../actions'


const DoubleDown = ({ ...props}) => {
    const dispatch = useDispatch();
    const currentBet = useSelector(state => state.currentBet)
    const playerCurrency = useSelector(state => state.playerCurrency)

    return (
        <>
        {props.playersCards.length > 2 ? (
            null
            ) : currentBet * 2 > playerCurrency ? null : (
                <button
                onClick={() => {
                    dispatch(playerDoubleDownAction(props.deck_id));
                }}
                >
              Double Down
            </button>
          )}
          </>
    )
}

export default DoubleDown