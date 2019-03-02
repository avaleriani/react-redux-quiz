import React from "react";
import Btn from "../Btn/Btn";
import styles from "./styles.module.css";

/**
 * @param {{restartGame: function, score: string}} props
 * @return HTMLElement
 */
const WinGame = (props) => (
  <div className={styles['win']}>
    <div className={styles['win-text']}>
      <span role="img" aria-label="party-emoji">🎉🎉  🏆  🎉🎉</span>
      <div>Congratulations, you Win!</div>
      <span role="img" aria-label="party-emoji">🎉🎉  🏆  🎉🎉</span>
      <br/>
      <div>Your score: {props.score}</div>
    </div>
    <Btn action={props.restartGame} text="Play again"/>

  </div>
);

export default WinGame;