import React, { Component } from "react";


class Card extends Component {
 constructor(){
  super();
  }

  render() {
    let displayedQueston;
    let displayedAnswers;
    let answer1;
    let answer2;
    let answer3;
    let answer4;

    if(this.props.currentQuestion){
    displayedQueston = this.props.currentQuestion.question
    displayedAnswers = this.props.currentQuestion.answers
    answer1 = displayedAnswers[0].value;
    answer2 = displayedAnswers[1].value;
    answer3 = displayedAnswers[2].value;
    answer4 = displayedAnswers[3].value;
    }
    
    return (
    <div className="card-div">
      <h3>{displayedQueston}</h3>
      <p className="answer">{answer1}</p>
      <p className="answer">{answer2}</p>
      <p className="answer">{answer3}</p>
      <p className="answer">{answer4}</p>
    </div>
    )
  }
}

export default Card; 