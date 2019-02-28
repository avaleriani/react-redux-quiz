import React from "react";
import styles from "./styles.module.css";

/**
 * @param {{restartGame: function}} props
 * @return HTMLElement
 */
const WinGame = (props) => (
  <div>
    <span role="img" aria-label="party-emoji">🎉🎉  🏆  🎉🎉</span>
    Congratulations, you Win!
    <span role="img" aria-label="party-emoji">🎉🎉  🏆  🎉🎉</span>
    <button onClick={props.restartGame}>Play again</button>
  </div>
);

export default WinGame;