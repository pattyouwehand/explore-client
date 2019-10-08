import React from 'react'
import HeaderNav from '../containers/HeaderNav/HeaderNav'
import { SideBar } from '../containers/SideBar/SideBar'

export default class Homepage extends React.Component {

  render() {
    return(
      <React.Fragment>
        <HeaderNav />
        <SideBar />  
      </React.Fragment>
    )
  }
}