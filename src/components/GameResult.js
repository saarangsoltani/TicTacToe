import React from "react";
import GameIcon from "./GameIcon";

const GameResult = props => {
  let iconName, message;

  if (props.type === "win") {
    message = "Winner is";
    iconName = props.turn === "x" ? "cross" : "circle";
  } else if (props.type === "draw") {
    message = "It's a draw";
    iconName = "draw";
  }

  return (
    <div className="side-content">
      <h1 className="result">{message}</h1>
      <GameIcon iconName={iconName} size={100} />
    </div>
  );
};

export default GameResult;
