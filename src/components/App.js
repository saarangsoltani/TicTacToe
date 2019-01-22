import React, { Component } from "react";
import TicTacToe from "./TicTacToe";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="game-wrapper">
          <TicTacToe />
        </div>
      </div>
    );
  }
}

export default App;
