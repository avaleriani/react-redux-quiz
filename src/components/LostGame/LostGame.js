import React from "react";
import styles from "./styles.module.css";

/**
 * @param {{restartGame: function}} props
 * @return HTMLElement
 */
const LostGame = (props) => (
  <div>
    <span role="img" aria-label="party-emoji">🐐</span>
    You lost
    <span role="img" aria-label="party-emoji">🐐</span>
    <button onClick={props.restartGame}>Restart</button>
  </div>
);

export default LostGame;