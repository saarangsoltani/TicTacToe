import React from "react";
import { default as Enzyme, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import TicTacToe from "../../components/TicTacToe";
import Cell from "../../components/Cell";
import GameResult from "../../components/GameResult";
import GameIcon from "../../components/GameIcon";

Enzyme.configure({ adapter: new Adapter() });

describe("TicTacToe", () => {
  it("should render without errors", () => {
    const wrapper = shallow(<TicTacToe />);
    expect(wrapper.find(".content .board").length).toBe(1);
  });

  it("should render a board with 9 empty cells", () => {
    const wrapper = shallow(<TicTacToe />);
    expect(wrapper.find(Cell).length).toBe(9);
  });

  it("should place a token on cell click", () => {
    const wrapper = shallow(<TicTacToe />);
    expect(
      wrapper
        .find(Cell)
        .first()
        .props().cellValue
    ).toBe(undefined);
    wrapper
      .find(Cell)
      .first()
      .simulate("click");
    expect(
      wrapper
        .find(Cell)
        .first()
        .props().cellValue
    ).toBe("x");
  });

  it("should remove token after Rewind click", () => {
    const wrapper = shallow(<TicTacToe />);
    expect(
      wrapper
        .find(Cell)
        .first()
        .props().cellValue
    ).toBe(undefined);
    wrapper
      .find(Cell)
      .first()
      .simulate("click");
    expect(
      wrapper
        .find(Cell)
        .first()
        .props().cellValue
    ).toBe("x");
    wrapper
      .find(".rewind")
      .first()
      .simulate("click");
    expect(
      wrapper
        .find(Cell)
        .first()
        .props().cellValue
    ).toBe(undefined);
  });

  it("should clear all cells after Reset click", () => {
    const wrapper = shallow(<TicTacToe />);
    wrapper
      .find(".board-row")
      .first()
      .find(Cell)
      .forEach(cell => {
        cell.simulate("click");
      }); //insert tokens on first three cells
    wrapper
      .find(".board-row")
      .first()
      .find(Cell)
      .forEach(cell => {
        expect(cell.props().cellValue).not.toBe(undefined);
      });

    wrapper
      .find(".reset")
      .first()
      .simulate("click");

    wrapper
      .find(".board-row")
      .first()
      .find(Cell)
      .forEach(cell => {
        expect(cell.props().cellValue).toBe(undefined);
      });
  });

  it("should display draw message if the game is draw", () => {
    const wrapper = shallow(<TicTacToe />);
    expect(wrapper.find(GameResult).length).toBe(0);
    wrapper.setState({ isGameDraw: true });
    expect(wrapper.find(GameResult).length).toBe(1);
    expect(
      wrapper
        .find(GameResult)
        .first()
        .props().type
    ).toBe("draw");
  });

  it("should display win message if the game is won", () => {
    const wrapper = shallow(<TicTacToe />);
    expect(wrapper.find(GameResult).length).toBe(0);
    wrapper.setState({ isGameWon: true, turn: "x" });
    expect(wrapper.find(GameResult).length).toBe(1);
    expect(
      wrapper
        .find(GameResult)
        .first()
        .props().type
    ).toBe("win");
    expect(
      wrapper
        .find(GameResult)
        .first()
        .props().turn
    ).toBe("x");
  });
});
