import React from "react";
import { default as Enzyme, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import GameResult from "../../components/GameResult";
import GameIcon from "../../components/GameIcon";

Enzyme.configure({ adapter: new Adapter() });

describe("GameResult", () => {
  it("should render without errors", () => {
    let props = { type: "win", turn: "x" };
    const wrapper = shallow(<GameResult {...props} />);
    expect(wrapper.find(".side-content").length).toBe(1);
  });

  describe("When it's a win", () => {
    it("should render win message if type is win", () => {
      let props = { type: "win", turn: "x" };
      const wrapper = shallow(<GameResult {...props} />);
      expect(wrapper.find(".result").text()).toBe("Winner is");
    });

    it("should render winner's icon as sub component", () => {
      let props = { type: "win", turn: "x" };
      const wrapper = shallow(<GameResult {...props} />);
      expect(wrapper.find(GameIcon).length).toBe(1);
      expect(wrapper.find(GameIcon).props()).toEqual({
        iconName: "cross",
        size: 100
      });
    });
  });

  describe("When it's a draw", () => {
    it("should render draw message if type is draw", () => {
      let props = { type: "draw", turn: "x" };
      const wrapper = shallow(<GameResult {...props} />);
      expect(wrapper.find(".result").text()).toBe("It's a draw");
    });

    it("should render draw icon as sub component if type is draw", () => {
      let props = { type: "draw" };
      const wrapper = shallow(<GameResult {...props} />);
      expect(wrapper.find(GameIcon).length).toBe(1);
      expect(wrapper.find(GameIcon).props()).toEqual({
        iconName: "draw",
        size: 100
      });
    });
  });
});
