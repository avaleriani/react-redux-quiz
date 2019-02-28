import React, { Component } from "react";
import { connect } from "react-redux";
import Header from '../../components/Header/Header';
import Welcome from "../../components/Welcome/Welcome";
import Question from "../../components/Question/Question";
import LostGame from "../../components/LostGame/LostGame";
import { fetchQuestion } from "../../redux/actions/questionAction";
import styles from "./styles.module.css";
import WinGame from "../../components/WinGame/WinGame";
import { resetStep } from "../../redux/actions/gameAction";

const levelAmount = 1; //todo: move to env
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
    this.endGame = this.endGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
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
    this.props.resetStep();
    this.setState({
      timeLeft: 30,
      isGameEnded: true
    });
  }

  restartGame() {
    clearInterval(this.timer);
    this.props.resetStep();
    this.setState({
      timeLeft: 30,
      isGameEnded: false
    });
  }

  tick() {
    if (this.state.timeLeft > 0 && !this.props.hasErrored) {
      this.setState(prevState => ({
        timeLeft: prevState.timeLeft - 1
      }));
    } else if (this.props.hasErrored) {
      clearInterval(this.timer);
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
      case levelAmount + 1:
        clearInterval(this.timer);
        return <WinGame restartGame={this.restartGame}/>;
      default:
        return <Question question={props.question} onSubmit={fetchNextQuestion}/>;
    }
  }

  render() {
    return (
      <div className={styles['game-container']}>
        <Header timeLeft={this.state.timeLeft}/>
        <div className={styles['game-screen']}>
          {this.props.hasErrored ? <div>ERROR</div> : null}
          {this.props.isLoading ? <div>LOADING</div> : null}
          {!this.props.hasErrored && !this.props.isLoading && !this.state.isGameEnded ? this.renderScreen(this.props) : null}
          {this.state.isGameEnded ? <LostGame restartGame={this.startTimer}/> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    question: state.question,
    hasErrored: state.questionError,
    isLoading: state.questionLoading,
    step: state.step
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestion: (url, currentStep) => dispatch(fetchQuestion(url, currentStep)),
    resetStep: () => dispatch(resetStep())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
