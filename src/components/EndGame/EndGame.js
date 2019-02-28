import React from "react";
import styles from "./styles.module.css";

/**
 * @param {{restartGame: function}} props
 * @return HTMLElement
 */
const EndGame = (props) => (
  <div>
    Game ended
    <button onClick={props.restartGame}>Restart</button>
  </div>
);

export default EndGame;