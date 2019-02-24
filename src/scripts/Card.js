import React, { Component } from "react";


class Card extends Component {
 constructor(){
  super();
    this.state = {
      currentCard: {}
    }
  }
  render() {
   let questions = this.props.questions.handbook 
   console.log(questions)
    return (
    <div className="card-div">
      <h3>question</h3>
      <p>a</p>
      <p>b</p>
      <p>c</p>
      <p>d</p>
    </div>
    )
  }
}

export default Card; 