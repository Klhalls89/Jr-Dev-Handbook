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
    },
    { question: 'What does css mean',
      answers: [ 'cascading sytle sheet',
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
      questions: mockData,
      results: ''
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

  describe('valid answer', () => {

    it('should shift the first question out of question array', () => {
      expect(wrapper.state('questions')).toHaveLength(2)
      wrapper.instance().validAnswer()
      expect(wrapper.state('questions')).toHaveLength(1)
    })

    it('should update results in state', () => {
      expect(wrapper.state('results')).toBe('')
      wrapper.instance().validAnswer()
      expect(wrapper.state('results')).toBe('You got this')
    })

  })

  describe('invalid answer', () => {
    const shiftedQuestion = { question: 'What does html mean',
    answers: [  'hypertext markup language',
    'false',
    'incorrect',
    'untrue'
      ]
    }

    it('should shift the first question out of question array then push it to the back', () => {
      expect(wrapper.state('questions')[0]).toEqual(shiftedQuestion)
      wrapper.instance().invalidAnswer()
      expect(wrapper.state('questions')[1]).toEqual(shiftedQuestion)
    })

    it('should update results in state', () => {
      expect(wrapper.state('results')).toBe('')
      wrapper.instance().invalidAnswer()
      expect(wrapper.state('results')).toBe('You can do better')
    })

  })

})