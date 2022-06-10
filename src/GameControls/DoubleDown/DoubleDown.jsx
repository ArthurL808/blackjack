import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {playerDoubleDownAction} from '../../actions'


const DoubleDown = ({ ...props}) => {
    const dispatch = useDispatch();
    const currentBet = useSelector(state => state.currentBet)
    const playerCurrency = useSelector(state => state.playerCurrency)
    return (
        <>
        {props.playersCards.length > 2 ? (
            null
            ) : (
                <button
                onClick={() => {
                    currentBet > playerCurrency ? alert('Not enough funds for double down.') :
                    dispatch(playerDoubleDownAction(props.deckId));
                }}
                >
              Double Down
            </button>
          )}
          </>
    )
}

export default DoubleDown