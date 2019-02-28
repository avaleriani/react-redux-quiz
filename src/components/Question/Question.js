import React from "react";
import styles from "./styles.module.css";

/**
 * @param {{ question: string, onSubmit: function}} props
 * @return HTMLElement
 */
const Question = (props) => (
  <form>
    <div className={styles['question']}>
      <label>QUESTION</label>
    </div>
    <div className={styles['answer']}>
      <textarea>{props.question}</textarea>
    </div>
    <button onClick={props.onSubmit}>submit</button>
  </form>
);

export default Question;