import React from "react";
import { connect } from "react-redux";
import Header from '../../components/Header/Header';
import Welcome from "../../components/Welcome/Welcome";
import Question from "../../components/Question/Question";
import EndGame from "../../components/EndGame/EndGame";
import { fetchQuestion } from "../../redux/actions/questionAction";
import styles from "./styles.module.css";

/**
 * @param {{ timer: number, step: number, onSubmit: function}} props
 * @return HTMLElement
 */
const GameContainer = (props) => {
  console.log(props)
  return (
    <div className={styles['game-container']}>
      <Header timer={props.timer.value}/>
      <div className={styles['game-screen']}>
        {renderScreen(props)}
      </div>
    </div>
  );
};

/**
 * @param {Object} props
 * @return HTMLElement
 */
const renderScreen = (props) => {
  if (props.step === 0) {
    return <Welcome startGame={() => {
      props.fetchQuestion("http://jservice.io/api/random ")
    }}
    />;
  } else if (props.step === 30) {
    return <EndGame/>;
  } else {
    const question = props.questions;
    return <Question question={question}/>;
  }
};

const mapStateToProps = (state) => {
  return {
    timer: state.timer,
    questions: state.questions,
    hasErrored: state.questionError,
    isLoading: state.questionLoading,
    step: state.step
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestion: (url) => dispatch(fetchQuestion(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
