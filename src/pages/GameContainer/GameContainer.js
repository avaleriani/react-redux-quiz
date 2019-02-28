import React, { Component } from "react";
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
class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 30,
      isGameEnded: false
    };

    this.tick = this.tick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    // this.restartTimer = this.restartTimer.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startTimer() {
    clearInterval(this.timer);
    this.setState({ timeLeft: 30, isGameEnded: false });
    this.timer = setInterval(this.tick, 1000);
  }

  endGame() {
    clearInterval(this.timer);
    this.setState({
      timeLeft: 30,
      isGameEnded: true
    });
  }

  tick() {
    if (this.state.timeLeft > 0) {
      this.setState(prevState => ({
        timeLeft: prevState.timeLeft - 1
      }));
    } else {
      this.endGame();
    }
  }

  renderScreen(props) {
    const fetchNextQuestion = () => {
      props.fetchQuestion("http://jservice.io/api/random", props.step); //todo: move to env
      this.startTimer();
    };

    switch(props.step) {
      case 0:
        return <Welcome startGame={fetchNextQuestion}/>;
      case levelAmount:
        return <EndGame restartGame={this.startTimer}/>;
      default:
        const question = props.questions[props.questions.length - 1];
        return question ? <Question question={question} onSubmit={fetchNextQuestion}/> : null;
    }
  }

  render() {
    return (
      <div className={styles['game-container']}>
        <Header timeLeft={this.state.timeLeft}/>
        <div className={styles['game-screen']}>
          {this.props.isError ? <div>ERROR</div> : null}
          {this.props.isLoading ? <div>LOADING</div> : null}
          {!this.props.isError && !this.props.isLoading && !this.state.isGameEnded ? this.renderScreen(this.props) : null}
          {this.state.isGameEnded ? <EndGame restartGame={this.startTimer}/> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
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
