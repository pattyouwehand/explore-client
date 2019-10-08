import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import './App.css';
import Homepage from './components/Homepage'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={Homepage} />
        </div>
      </Provider>
    );
  }
}

export default App