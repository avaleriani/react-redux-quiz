import React from "react";
import styles from "./styles.module.css";

/**
 * @type {{roundPoints: number, timeLeft: number, currentScore: number,
 * highestScore: number, currentLevel: number}} props
 * @return HTMLElement
 */
const Header = (props) => (
  <div className={styles['header']}>
    <div>
      <span><span role="img" aria-label="timer">⏲</span>️ Time left: </span>
      <span>{props.timeLeft}</span>
    </div>
    <div>
      <span><span role="img" aria-label="joystick">🕹️</span> Level: </span>
      <span>{props.currentLevel}</span>
    </div>
    <div>
      <span><span role="img" aria-label="joystick">🎮</span> Current score: </span>
      <span>{props.currentScore}</span>
    </div>
    <div>
      <span><span role="img" aria-label="a hundred">💯 </span> Highest score: </span>
      <span>{props.highestScore}</span>
    </div>
    <div>
      <span><span role="img" aria-label="dice">🎲 </span> Round points: </span>
      <span>{props.roundPoints}</span>
    </div>
  </div>
);

export default Header;

