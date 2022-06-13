import React from "react";
import Styles from './Cards.module.css';

const Cards = ({ ...props }) => {
  return(
    props.hideCard ? (
      <div className={Styles.cardBack}>
      <img className={Styles.hideCard} key={props.code} src={props.card.image} alt="playing card" />
      </div>
    ) : (<img className={Styles.card} key={props.code} src={props.card.image} alt="playing card" />)
  )
};

export default Cards;
