import React from "react";
import { default as Enzyme, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../../components/App";
import TicTacToe from "../../components/TicTacToe";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("should render without errors", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".app .game-wrapper").length).toBe(1);
  });

  it("should render TicTacToe as sub component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(TicTacToe).length).toBe(1);
  });
});
