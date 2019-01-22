import React from "react";
import Circle from "../assets/circle.svg";
import Cross from "../assets/cross.svg";
import Draw from "../assets/draw.svg";

const GameIcon = props => {
  let icons = {
    circle: Circle,
    cross: Cross,
    draw: Draw
  };
  return (
    <img
      src={icons[props.iconName]}
      width={`${props.size}px`}
      height={`${props.size}px`}
      alt="result"
    />
  );
};

export default GameIcon;
