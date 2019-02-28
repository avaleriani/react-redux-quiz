import React, { Component } from "react";
import styles from "./styles.module.css";

/**
 * @param {{ question: Object, onSubmit: function}} props
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
    if (this.isAnswerRight(this.props.question.answer, this.state.answer)) {
      this.setState({
        isWrong: false
      });
      this.props.onSubmit(this.props.question.answer, this.state.answer)
    } else {
      this.setState({
        isWrong: true
      });
    }
  };

  isAnswerRight(rightAnswer, answer) {
    return rightAnswer.toLowerCase() === answer.toLowerCase();
  }

  render() {
    return (
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
    );
  }
}

export default Question;