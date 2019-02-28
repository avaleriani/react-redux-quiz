import React from "react";
import styles from "./styles.module.css";

/**
 * @param {{ question: string, onSubmit: function}} props
 * @return HTMLElement
 */
const Question = (props) => {
  return (
    <form>
      <div className={styles['question']}>
        <label>QUESTION</label>
        <div>
          {props.question.category ? props.question.category.title : ''}
        </div>

        <div>
          {props.question.question}
        </div>
      </div>
      <div className={styles['answer']}>
        <textarea/>
      </div>
      <button onClick={props.onSubmit}>submit</button>
    </form>
  );
};

export default Question;