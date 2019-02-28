import React from "react";
import styles from "./styles.module.css";

/**
 * @param {{ timer: string, currentScore: number, highestScore: number}} props
 * @return HTMLElement
 */
const Header = (props) => (
  <div className={styles['header']}>
    <div>{props.timeLeft}</div>
    <div>{props.currentScore}</div>
    <div>{props.highestScore}</div>
  </div>
);

export default Header;

