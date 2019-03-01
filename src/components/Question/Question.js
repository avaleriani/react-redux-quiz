import React, { Component } from "react";
import styles from "./styles.module.css";
import { cleanHtmlText } from "../../Utils/utils";

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

  onTextUpdate(evt) {
    this.setState({
      answer: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
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
          <label>QUESTION</label>
          <div className={styles['question-category']}>
            {this.props.question ? this.props.question.category.title : ''}
          </div>
          <div className={styles['question-text']}>
            {this.props.question.question}
          </div>
        </div>
        <div className={styles['answer']}>
          <input type="text" onChange={this.onTextUpdate} autoFocus/>
        </div>
        <input type="submit" value="Submit"/>
        {this.state.isWrong ? <div className={styles['is-wrong']}>Wrong answer</div> : null}
      </form>
    ) : null;
  }
}

export default Question;