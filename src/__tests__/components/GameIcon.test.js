import React from "react";
import { default as Enzyme, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import GameIcon from "../../components/GameIcon";

Enzyme.configure({ adapter: new Adapter() });

describe("GameIcon", () => {
  it("should render without errors", () => {
    let props = { iconName: "circle", size: 100 };
    const wrapper = shallow(<GameIcon {...props} />);
    expect(wrapper.find("img").length).toBe(1);
  });

  it("should render draw.svg if iconName is draw", () => {
    let props = { iconName: "draw", size: 100 };
    const wrapper = shallow(<GameIcon {...props} />);
    expect(wrapper.find("img").props().src).toBe("draw.svg");
    expect(wrapper.find("img").props().height).toBe(`${props.size}px`);
    expect(wrapper.find("img").props().width).toBe(`${props.size}px`);
  });

  it("should render circle.svg if iconName is circle", () => {
    let props = { iconName: "circle", size: 100 };
    const wrapper = shallow(<GameIcon {...props} />);
    expect(wrapper.find("img").props().src).toBe("circle.svg");
    expect(wrapper.find("img").props().height).toBe(`${props.size}px`);
    expect(wrapper.find("img").props().width).toBe(`${props.size}px`);
  });

  it("should render cross.svg if iconName is cross", () => {
    let props = { iconName: "cross", size: 100 };
    const wrapper = shallow(<GameIcon {...props} />);
    expect(wrapper.find("img").props().src).toBe("cross.svg");
    expect(wrapper.find("img").props().height).toBe(`${props.size}px`);
    expect(wrapper.find("img").props().width).toBe(`${props.size}px`);
  });
});
