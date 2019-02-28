import React from "react";
import { connect } from "react-redux";
import Header from '../../components/Header/Header';
import Welcome from "../../components/Welcome/Welcome";
import Question from "../../components/Question/Question";
import EndGame from "../../components/EndGame/EndGame";
import { fetchQuestion } from "../../redux/actions/questionAction";
import styles from "./styles.module.css";
import { advanceStep } from "../../redux/actions/gameAction";

const levelAmount = 30;
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
  switch(props.step) {
    case 0:
      return <Welcome startGame={() => {
        // props.dispatch()
        props.fetchQuestion("http://jservice.io/api/random ")
      }}/>;
    case levelAmount:
      return <EndGame/>;
    default:
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
    fetchQuestion: (url) => dispatch(fetchQuestion(url)),
    nextStep: (currentStep) => dispatch(advanceStep(currentStep))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
