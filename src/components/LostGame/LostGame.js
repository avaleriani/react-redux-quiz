import React from "react";
import Btn from "../Btn/Btn";
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
    <Btn action={props.restartGame} text="Restart"/>
  </div>
);

export default LostGame;