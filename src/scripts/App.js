import React, { Component } from "react";
import Card from "./Card";
// import handbook from "../data/handbook";

class App extends Component {
 constructor(){
  super();
    this.state = {
      questions: [],
      results: ''
    }
  }

  componentDidMount = () => {
    if (!localStorage.getItem("incompleteCards")) {
      this.fetchData() 
  } else {
    this.setState({
      questions: JSON.parse(localStorage.getItem("incompleteCards"))
      })
    }    
  }

  fetchData() {
    fetch('http://memoize-datasets.herokuapp.com/api/v1/handbook')
      .then(response => response.json())
      .then(results => {
        localStorage.setItem("incompleteCards", JSON.stringify(results.handbook));
        this.setState({
          questions: results.handbook
        })
      })
      .catch(err => {
        throw new Error(err);
      }) 
  }

  useValidatedAnswer(ans) {
    if (ans === 'correct') {
      //change results to you got this
      //shift current question out of the array
      //after set state save question to local storage
    } else {
      invalidAnswer()
    }
  
  }

  invalidAnswer(){
    //change results to try harder
    //capture shifted question
    //pop it to the end of the questions
    //after set state save question to local storage

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
       { currentQuestion && <Card useValidatedAnswer={this.useValidatedAnswer} currentQuestion={currentQuestion}/>}
      </section>
      <section className="results-sect">
        <h2>Results:</h2>
        <p className="results">{this.state.results}</p>
      </section>
    </div>
    )
  }
}

export default App; 