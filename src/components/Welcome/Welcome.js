import React from "react";
import styles from "./styles.module.css";
import Btn from "../Btn/Btn";

/**
 * @param {{startGame: function}} props
 * @return HTMLElement
 */
const Welcome = (props) => (
  <div className={styles['welcome']}>
    <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo"/>
    <Btn action={props.startGame} text="Start"/>
  </div>
);

export default Welcome;