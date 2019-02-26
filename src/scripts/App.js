import React, { Component } from "react";
import Card from "./Card";

class App extends Component {
 constructor(){
  super();
    this.state = {
      questions: [],
      results: ''
    }
  }

  componentDidMount() {
    if (!localStorage.getItem("incompleteQuestions")) {
      this.fetchData() 
  } else {
    this.setState({
      questions: JSON.parse(localStorage.getItem("incompleteQuestions"))
      })
    }    
  }

  fetchData = () => {
    fetch('http://memoize-datasets.herokuapp.com/api/v1/handbook')
      .then(response => response.json())
      .then(results => {
        localStorage.setItem("incompleteQuestions", JSON.stringify(results.handbook));
        this.setState({
          questions: results.handbook
        })
      })
      .catch(err => {
        throw new Error(err);
      }) 
  }

  validAnswer = () => {
    const currentQuestions = [...this.state.questions]
    currentQuestions.shift()
      this.setState({
        questions: currentQuestions,
        results: 'You got this'
      })
      if (currentQuestions.length === 0){
        localStorage.removeItem('incompleteQuestions')
        this.setState({
        results: 'Congratulations Junior Developer!'
      })
    } else {
        localStorage.setItem("incompleteQuestions", JSON.stringify(currentQuestions))
    }
  }

  invalidAnswer = () => {
    const currentQuestions = [...this.state.questions]
    const retryQuestion = currentQuestions.shift()
    currentQuestions.push(retryQuestion)
    localStorage.setItem("incompleteQuestions", JSON.stringify(currentQuestions))
      this.setState({
      questions: currentQuestions,
      results: 'You can do better'
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
       { currentQuestion && <Card invalidAnswer={this.invalidAnswer} validAnswer={this.validAnswer} currentQuestion={currentQuestion}/>}
      </section>
      <section className="results-sect">
        <h2>Results:</h2>
        <p className="results">{this.state.results}</p>
        <a href="http://frontend.turing.io/lessons/">Learn more about becoming a junior developer</a>
      </section>
    </div>
    )
  }
}

export default App; 