import React from "react";
import { default as Enzyme, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Cell from "../../components/Cell";

Enzyme.configure({ adapter: new Adapter() });

describe("Cell", () => {
  it("should render without errors", () => {
    let props = { cellValue: "x", onClick: () => {} };
    const wrapper = shallow(<Cell {...props} />);
    expect(wrapper.find(".board-cell").length).toBe(1);
  });

  it("Calls the passed event handler on click", () => {
    const props = { onClick: jest.fn(x => x) };
    const wrapper = shallow(<Cell {...props} />);
    wrapper.find(".board-cell").simulate("click");
    expect(props.onClick.mock.calls.length).toBe(1);
  });

  it("should render with correct class", () => {
    let props = { cellValue: "x", onClick: () => {} };
    let wrapper = shallow(<Cell {...props} />);
    expect(wrapper.find(".board-cell").hasClass("x")).toBe(true);

    props = { cellValue: "y", onClick: () => {} };
    wrapper = shallow(<Cell {...props} />);
    expect(wrapper.find(".board-cell").hasClass("y")).toBe(true);

    props = { onClick: () => {} };
    wrapper = shallow(<Cell {...props} />);
    expect(wrapper.find(".board-cell").hasClass("empty")).toBe(true);
  });
});
