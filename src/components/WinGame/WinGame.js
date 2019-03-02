import React from "react";
import styles from "./styles.module.css";
import Btn from "../Btn/Btn";

/**
 * @param {{restartGame: function}} props
 * @return HTMLElement
 */
const WinGame = (props) => (
  <div>
    <span role="img" aria-label="party-emoji">🎉🎉  🏆  🎉🎉</span>
    Congratulations, you Win!
    <span role="img" aria-label="party-emoji">🎉🎉  🏆  🎉🎉</span>
    <Btn action={props.restartGame} text="Play again"/>
  </div>
);

export default WinGame;