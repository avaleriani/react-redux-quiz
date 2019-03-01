import React from "react";
import styles from "./styles.module.css";

/**
 * @param {{startGame: function}} props
 * @return HTMLElement
 */
const Welcome = (props) => (
  <div>
    Start quiz
    <button onClick={props.startGame}>Start</button>
  </div>
);

export default Welcome;