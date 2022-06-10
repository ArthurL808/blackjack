import React from 'react'
import {useSelector} from 'react-redux'
import PlayerHand from "../PlayerHand";
import DealerHand from "../DealerHand";
import GameControls from '../GameControls';
import {
    selectPlayersCards,
    selectDealersCards,
    selectPlayerTotal,
    selectDealerTotal,
    selectPlayerStand, } from '../selectors';

const GameBoard = ({...props}) =>{
    const playersCards = useSelector(selectPlayersCards);
    const dealersCards = useSelector(selectDealersCards);
    const playerTotal = useSelector(selectPlayerTotal);
    const dealerTotal = useSelector(selectDealerTotal);
    const playerStand = useSelector(selectPlayerStand);


    return(
        <div>
          <p>Cards remaining: {props.deck.remaining}</p>
          <DealerHand
            deck={props.deck}
            total={dealerTotal}
            cards={dealersCards}
            playerStand={playerStand}
            playerTotal={playerTotal}
          />
          <PlayerHand
            cards={playersCards} 
            total={playerTotal} 
            />
           <GameControls
            playersCards={playersCards}
            deck={props.deck}/>
        </div>
    )
}

export default GameBoard