import React from "react";
import ReactDOM from "react-dom";
import App from "../scripts/App";
import { shallow } from 'enzyme';

let mockData = [
    { question: 'What does html mean',
      answers: [ 'hypertext markup language',
                  'false',
                  'incorrect',
                  'untrue'
                ]
    }
]

describe('App testing', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<App />);
    wrapper.setState({
      questions: mockData
    })
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