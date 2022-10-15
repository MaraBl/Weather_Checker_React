import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./src/App.js";
import SearchWeather from "./src/containers/searchWeather.js";

Enzyme.configure({ adapter: new Adapter() });

describe("App.js", () => {
  test("renders", () => {
    const component = shallow(<App />);
    expect(component.exists()).toBe(true);
  });
});

describe("searchWeather.js", () => {
  test("renders", () => {
    const component = shallow(<SearchWeather />);
    expect(component.exists()).toBe(true);
  });
});
