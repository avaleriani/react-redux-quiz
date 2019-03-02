import React, { Component } from "react";
import Btn from "../Btn/Btn";
import { cleanHtmlText } from "../../Utils/utils";
import styles from "./styles.module.css";

/**
 * @param {{question: Object, onSubmit: function, userAnswerState: function}} props
 * @return HTMLElement
 */
class Question extends Component {
  constructor() {
    super();
    this.state = {
      answer: '',
      isWrong: false
    };

    this.onTextUpdate = this.onTextUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onTextUpdate(event) {
    this.setState({
      answer: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.answer) {
      //Sometimes the answer come wrapped in HTML.
      const correctAnswer = cleanHtmlText(this.props.question.answer);
      if (this.isAnswerCorrect(correctAnswer, this.state.answer)) {
        this.setState({
          isWrong: false
        });
        this.props.onSubmit(this.props.question.answer, this.state.answer)
      } else {
        this.setState({
          isWrong: true
        });
        this.props.userAnswerState(false);
      }
    }
  };

  /**
   * @type {string} correctAnswer
   * @type {string} answer
   * @return HTMLElement
   */
  isAnswerCorrect(correctAnswer, answer) {
    return correctAnswer.toLowerCase() === answer.toLowerCase();
  }

  render() {
    return this.props.question ? (
      <form onSubmit={this.handleSubmit}>
        <div className={styles['question']}>
          <div className={styles['question-category']}>
            {this.props.question ? this.props.question.category.title : ''}
          </div>
          <div className={styles['question-text']}>
            {this.props.question.question}
          </div>
        </div>
        <input placeholder="Your answer" className={styles['answer']} type="text" onChange={this.onTextUpdate}
               autoFocus/>
        <div className={styles['button-container']}>
          {this.state.isWrong ? <div className={styles['is-wrong']}>
            <span role="img" aria-label="thumbs-down">👎</span>
            Wrong answer
            <span role="img" aria-label="thumbs-down"> 👎</span>
          </div> : null}
          <Btn type="submit" text="Submit"/>
        </div>
      </form>
    ) : null
  }
}

export default Question;