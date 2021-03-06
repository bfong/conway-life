import React, { Component } from 'react';
import logo from './logo.svg';
import Game from './components/Game'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Conway's Game of Life</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Game></Game>
      </div>
    );
  }
}

export default App;
