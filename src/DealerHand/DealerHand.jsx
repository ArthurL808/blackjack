import React, { useEffect,useState } from "react";
import Styles from './DealerHand.module.css';
import Cards from "../Cards";
import { useDispatch } from "react-redux";
import {
  dealerDrawAction,
  playerWinAction,
  playerPushAction,
  playerLossAction,
} from "../actions";

const DealerHand = ({ ...props }) => {
  const dispatch = useDispatch();
  const [hideCard,setHideCard] = useState(true);

  useEffect(() => {
    if (props.cards.length > 2) {
      checkForBust(props.total);
    }
    if (props.playerStand === true) {
      setHideCard(false)
      determineDealerHit(props.total);
    }
  }, [props.total, props.cards, props.playerStand]);

  const checkForBust = (total) => {
    if (total > 21) {
      return dispatch(playerWinAction);
    }
  };

  const determineRoundResults = (playerTotal, dealerTotal) => {
    if (playerTotal === dealerTotal) {
      return dispatch(playerPushAction);
    }
    if (playerTotal > dealerTotal) {
      return dispatch(playerWinAction);
    }
    if (dealerTotal > playerTotal && dealerTotal <= 21) {
      return dispatch(playerLossAction);
    }
  };

  const determineDealerHit = (total) => {
    if (total >= 17) {
      return determineRoundResults(props.playerTotal, props.total);
    }
    dispatch(dealerDrawAction(props.deckId, 1));
  };
  //   const checkForShowingAce = (cards) => {
  //     if (cards[1] === "ACE") {
  //       return dispatch(askForInsurance);
  //     }
  //   };

  return (
    <div className={Styles.dealerHand} > 
      {props.cards.map((card,i) => {
        console.log(hideCard,i)
        if(i === 1 && hideCard === true){
          return  <Cards key={card.code} card={card} hideCard={hideCard}/>
        }
        return <Cards key={card.code} card={card} />;
      })}
    </div>
  );
};
export default DealerHand;
