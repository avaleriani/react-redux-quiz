import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Header from '../../components/Header/Header';
import Welcome from "../../components/Welcome/Welcome";
import Question from "../../components/Question/Question";
import LostGame from "../../components/LostGame/LostGame";
import WinGame from "../../components/WinGame/WinGame";
import Loading from "../../components/Loading/Loading";
import { fetchQuestion } from "../../redux/actions/questionAction";
import { resetGame, userAnswerState } from "../../redux/actions/gameAction";
import styles from "./styles.module.css";
import Help from "../../components/Help/Help";

/**
 * @type {{timer: number, step: number, onSubmit: function}} props
 * @return HTMLElement
 */
class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: process.env.REACT_APP_TIME_AVAILABLE,
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
    this.setState({ timeLeft: process.env.REACT_APP_TIME_AVAILABLE, isGameEnded: false });
    this.timer = setInterval(this.tick, 1000);
  }

  endGame() {
    clearInterval(this.timer);
    this.setState({
      timeLeft: process.env.REACT_APP_TIME_AVAILABLE,
      isGameEnded: true
    });
  }

  restartGame() {
    clearInterval(this.timer);
    this.props.resetGame();
    this.setState({
      timeLeft: process.env.REACT_APP_TIME_AVAILABLE,
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
      if (!props.userAnswerState) {
        this.endGame();
      } else {
        props.fetchQuestion(`${process.env.REACT_APP_API_URL}api/random`, props.step);
        this.startTimer();
      }
    };

    const updateUserAnswerState = (state) => {
      props.setUserAnswerState(state)
    };

    switch(props.step) {
      case 0:
        return <Welcome startGame={fetchNextQuestion}/>;
      case process.env.REACT_APP_AMOUNT_OF_LEVELS + 1:
        clearInterval(this.timer);
        return <WinGame restartGame={this.restartGame}/>;
      default:
        const displayHelp = this.state.timeLeft < 130;
        return (<Fragment>
          <Question question={props.question}
                    onSubmit={fetchNextQuestion}
                    userAnswerState={updateUserAnswerState}/>
          <Help display={displayHelp} helpText={props.question !== null ? props.question.answer : ''}/>
        </Fragment>);
    }
  }

  render() {
    const isPlayingGame = !this.props.hasErrored && !this.props.isLoading && !this.state.isGameEnded;
    return (
      <div className={styles['game-container']}>
        <Header timeLeft={this.state.timeLeft} currentScore={this.props.currentScore}
                highestScore={this.props.highestScore} roundPoints={this.props.roundPoints}
                currentLevel={this.props.step}/>
        <div className={styles['game-screen']}>
          {this.props.hasErrored ? <div>ERROR</div> : null}
          {this.props.isLoading ? <Loading/> : null}
          {isPlayingGame ? this.renderScreen(this.props) : null}
          {this.state.isGameEnded ? <LostGame restartGame={this.restartGame}/> : null}
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
    step: state.step,
    currentScore: state.currentScore,
    highestScore: state.highestScore,
    roundPoints: state.roundPoints,
    userAnswerState: state.userAnswerState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestion: (url, currentStep) => dispatch(fetchQuestion(url, currentStep)),
    resetGame: () => dispatch(resetGame()),
    setUserAnswerState: (state) => dispatch(userAnswerState(state))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
