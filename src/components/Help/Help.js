import React from "react";
import styles from "./styles.module.css";

/**
 * @types {{helpText: string, display: boolean}} props
 * @return HTMLElement
 */
const Btn = (props) => {
  const classes = [styles['help'], props.display ? styles['show'] : styles['hide']].join(' ');
  return (
    <span className={classes} role="img"
          aria-label="question-mark" data-tooltip={props.helpText}>❓
  </span>
  );
};

export default Btn;
