import React from "react";
import Btn from "../Btn/Btn";
import styles from "./styles.module.css";

/**
 * @param {{restartGame: function, score: string}} props
 * @return HTMLElement
 */
const LostGame = (props) => (
  <div className={styles['lost']}>
    <div className={styles['lost-text']}>
      <span role="img" aria-label="party-emoji">❌</span>
      <div>You lost </div>
      <span role="img" aria-label="party-emoji"> ❌</span>
      <br/>
      <div>Your score: {props.score}</div>
    </div>
    <Btn action={props.restartGame} text="Restart"/>
  </div>
);

export default LostGame;