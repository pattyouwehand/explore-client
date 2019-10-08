import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import HeaderNav from './containers/HeaderNav/HeaderNav'
import {SideBar} from './containers/SideBar/SideBar'
import { Home } from './containers/Home/Home'
import './containers/Home/Home.scss'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <HeaderNav/>
          <SideBar/>
          <Home />
        </div>
      </Provider>
    );
  }
}

export default App