import React from "react";
import { connect } from "react-redux";
import Header from '../../components/Header/Header';
import Welcome from "../../components/Welcome/Welcome";
import Question from "../../components/Question/Question";
import EndGame from "../../components/EndGame/EndGame";
import { fetchQuestion } from "../../redux/actions/questionAction";
import styles from "./styles.module.css";

const levelAmount = 30; //todo: move to env
/**
 * @param {{ timer: number, step: number, onSubmit: function}} props
 * @return HTMLElement
 */
const GameContainer = (props) => {
  return (
    <div className={styles['game-container']}>
      <Header timer={props.timer.value}/>
      <div className={styles['game-screen']}>
        {props.isError ? <div>ERROR</div> : null}
        {props.isLoading ? <div>LOADING</div> : null}
        {!props.isError && !props.isLoading ? renderScreen(props) : null}
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
        props.fetchQuestion("http://jservice.io/api/random", props.step) //todo: move to env
      }}/>;
    case levelAmount:
      return <EndGame/>;
    default:
      const question = props.questions[props.questions.length - 1];
      return question ? <Question question={question} onSubmit={() => {
        props.fetchQuestion("http://jservice.io/api/random", props.step) //todo: move to env
      }}/> : null;
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
    fetchQuestion: (url, currentStep) => dispatch(fetchQuestion(url, currentStep))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
