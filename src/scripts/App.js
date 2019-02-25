import React, { Component } from "react";
import Card from "./Card";
import handbook from "../data/handbook";

class App extends Component {
 constructor(){
  super();
    this.state = {
      questions: []
    }
  }

  componentDidMount() {
    this.setState({
      questions: handbook
    })  
  }

  render() {
    let currentQuestion;
    if (this.state.questions.length > 0) {
      currentQuestion = this.state.questions[0]
    }
    return (
    <div className="quiz-page">
      <section className="header-sect">
        <h1 className="logo">The Jr. Dev Handbook</h1>
      </section>
      <section className="instructions-sect">
        <h2>Instructions:</h2>
        <p>Welcome to the junior developer's handbook. 
        It's a series of flash cards with terms and ideas you should know.
        Anything you get right will be taken out of your flashcard deck.
        Anything you get wrong will be asked again. Start studying!</p>
      </section>
      <section className="card-sect">
        <Card currentQuestion={currentQuestion}/>
      </section>
      <section className="results-sect">
        <h2>Results:</h2>
        <p className="results">Correct</p>
      </section>
    </div>
    )
  }
}

export default App; 