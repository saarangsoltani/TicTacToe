import React from "react";

const Cell = ({ cellValue, onClick }) => {
  return (
    <div
      className={`board-cell ${cellValue ? cellValue : "empty"}`}
      onClick={onClick}
    />
  );
};

export default Cell;
