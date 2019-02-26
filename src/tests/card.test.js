import React from "react";
import ReactDOM from "react-dom";
import Card from "../scripts/Card";
import { shallow } from 'enzyme';

const mockQuestion = 
    { question: 'What does html mean',
      answers: [ 'hypertext markup language',
                  'false',
                  'incorrect',
                  'untrue'
                ]
    }
const validAnswermock = jest.fn()
const invalidAnswerMock = jest.fn()

describe('Card testing', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Card invalidAnswer={invalidAnswerMock} 
                            validAnswer={validAnswermock} 
                            currentQuestion={mockQuestion}/>);
  })

  it("render should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should ')

})