import React from 'react'
import { Navbar } from './Navbar'


export default class Homepage extends React.Component {

  render() {
    return(
      <div className="Homepage">
        <header className="App-header">
          <h1 className="App-title">Explore the world</h1>
        </header>
          <main>
            <Navbar />
          </main>
        </div>
    )
  }
}