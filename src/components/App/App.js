import React, { Component } from 'react';
import { Provider } from "react-redux";
import { configureStore } from "../../redux/store";
import Dashboard from '../../pages/GameContainer/GameContainer';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Dashboard/>
      </Provider>
    );
  }
}

export default App;
