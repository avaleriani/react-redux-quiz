import React, { Component } from "react";
import styles from "./styles.module.css";

/**
 * @param {{ question: string, onSubmit: function}} props
 * @return HTMLElement
 */
class Question extends Component {
  constructor() {
    super();
    this.state = {
      answer: ''
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
    this.props.onSubmit(this.props.question.answer, this.state.answer)
  };

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
          <textarea onChange={this.onTextUpdate}/>
        </div>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default Question;