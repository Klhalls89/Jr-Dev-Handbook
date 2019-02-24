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
    return (
    <div>
      <section className="header">
        <h1 className="logo">The Jr. Dev Handbook</h1>
        <h2>Instructions</h2>
      </section>
      <section className="card-section">
        <Card questions={this.state.questions}/>
        <p>Correct</p>
      </section>
    </div>
    )
  }
}

export default App; 