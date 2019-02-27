import React from "react";
import ReactDOM from "react-dom";
import Card from "../scripts/Card";
import { shallow } from 'enzyme';

const mockQuestion = 
    { question: 'What does html mean',
      answers: [  {ture: 'html'},
                  {false: 'css'}
                ]
    }

const mockAnswers = [{ture: 'html'},{false: 'css'}]
const mockAnswerString = ['html','css']

const validAnswermock = jest.fn()
const invalidAnswerMock = jest.fn()

describe('Card testing', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Card invalidAnswer={invalidAnswerMock} 
                            validAnswer={validAnswermock} 
                            currentQuestion={mockQuestion}/>);
  })

  it("should match the snapshot when rendered", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("getAnswers", () => {

    it("should get array of the question stings", () => {
      const getAnswersResult = wrapper.instance().getAnswers(mockAnswers)
      expect(getAnswersResult).toEqual(['html','css'])  
    })

  })

  describe("populateAnswers", () => {

  it("should produce p tags from an array", () => {
  expect(wrapper.find('.answers-on-card')).toHaveLength(2);
  })

  })

})