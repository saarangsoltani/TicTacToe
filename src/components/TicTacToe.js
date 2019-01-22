import React from "react";
import Game from "../game";
import Cell from "./Cell";
import GameResult from "./GameResult";
import GameIcon from "./GameIcon";

class TicTacToe extends React.Component {
  constructor() {
    super();
    this.game = new Game();
    this.state = { board: this.game.board, turn: this.game.turn };
  }
  updateState() {
    this.setState({
      board: this.game.board,
      turn: this.game.turn,
      isGameWon: this.game.isGameWon(),
      isGameDraw: this.game.isGameDraw()
    });
  }
  rewindHandler() {
    this.game.rewindMove();
    this.updateState();
  }

  resetHander() {
    this.game = new Game();
    this.updateState();
  }

  onCellClick(row, col) {
    if (this.state.board[row][col] === undefined) {
      this.game.insertToken(row, col);
      this.updateState();
    }
  }
  render() {
    let board = this.state.board.map((row, rowIndex) => {
      return (
        <div className="board-row" key={rowIndex}>
          {row.map((col, colIndex) => {
            return (
              <Cell
                cellValue={col}
                key={colIndex}
                onClick={this.onCellClick.bind(this, rowIndex, colIndex)}
              />
            );
          })}
        </div>
      );
    });
    return (
      <div className="content">
        <div className="board">{board}</div>
        <div className="side">
          <div className="side-header">
            <div className="status">
              {!(this.state.isGameWon || this.state.isGameDraw) && (
                <h1>
                  Next Turn:{" "}
                  <GameIcon
                    size="50"
                    iconName={this.state.turn === "x" ? "cross" : "circle"}
                  />
                </h1>
              )}
            </div>
            <div className="actions">
              <button
                className="btn rewind"
                onClick={this.rewindHandler.bind(this)}
              >
                Rewind
              </button>
              <br />
              <button
                className="btn reset"
                onClick={this.resetHander.bind(this)}
              >
                Reset
              </button>
            </div>
          </div>
          <hr />
          {(this.state.isGameWon || this.state.isGameDraw) && (
            <GameResult
              type={this.state.isGameWon ? "win" : "draw"}
              turn={this.state.turn}
            />
          )}
        </div>
      </div>
    );
  }
}

export default TicTacToe;
