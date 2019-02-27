import React, { Component } from "react";

class Card extends Component {
 constructor(){
  super();
  }

 shuffleAnswers(arr) {
   for (let i = arr.length - 1; i > 0; i--) {
       const ranNum = Math.floor(Math.random() * (4));
       [arr[i], arr[ranNum]] = [arr[ranNum], arr[i]];
   }
  }

  getAnswers(shufAns) {
    return shufAns.map((ans) => {
      return Object.values(ans)[0]
    })
  }

  populateAnswers = (arr) => {
    return arr.map((answer) => {
      return (<p className="answers-on-card" onClick={this.validateAnswer}>{answer}</p>)
    })
  }

  validateAnswer = (e) => {
   if(e.target.innerText === this.props.currentQuestion.answers[0].Correct){
    this.props.validAnswer()
   } else {
    this.props.invalidAnswer()
   }
  }

  render() {
    let displayedQueston = this.props.currentQuestion.question
    let answersToShuffle = [...this.props.currentQuestion.answers]
    this.shuffleAnswers(answersToShuffle)
    let answersText = this.getAnswers(answersToShuffle)
    const allAnswers = this.populateAnswers(answersText)
    return (
    <div className="card-div">
      <h3>{displayedQueston}</h3>
      {allAnswers}
    </div>
    )
  }
}

export default Card; 