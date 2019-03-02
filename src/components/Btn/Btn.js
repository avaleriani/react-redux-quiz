import React from "react";
import styles from "./styles.module.css";

/**
 * @types {{action: function, text: string, type: string}} props
 * @return HTMLElement
 */
const Btn = (props) => (
  <button onClick={props.action ? props.action : null} type={props.type ? props.type : "button"}
          className={styles['button']}>{props.text}</button>
);

export default Btn;