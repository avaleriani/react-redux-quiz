import React from "react";
import styles from "./styles.module.css";

/**
 * @param {{ roundPoints: number, timeLeft: number, currentScore: number, highestScore: number}} props
 * @return HTMLElement
 */
const Header = (props) => (
  <div className={styles['header']}>
    <div>
      <span>Time left: </span>
      <span>{props.timeLeft}</span>
    </div>
    <div>
      <span>Current score: </span>
      <span>{props.currentScore}</span>
    </div>
    <div>
      <span>Highest score:</span>
      <span>{props.highestScore}</span>
    </div>
    <div>
      <span>Round points:</span>
      <span>{props.roundPoints}</span>
    </div>
  </div>
);

export default Header;

