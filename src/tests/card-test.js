import React from "react";
import ReactDOM from "react-dom";
import App from "../scripts/App";
import { shallow } from 'enzyme';

describe('Card testing', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Card />);
  })

  it("should match the snapshot with mock state", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

})