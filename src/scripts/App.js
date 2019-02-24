import React, { Component } from 'react';
import Card from './Card'

class App extends Component {
 constructor(){
  super();
    this.state = {
      questions: []
    }
  }
  render() {
    return (
    <div>
      <section className="header">
        <h1 className="logo">The Jr. Dev Handbook</h1>
        <h2>Instructions</h2>
      </section>
      <section className="card-section">
        <Card />
        <p>Correct</p>
      </section>
    </div>
    )
  }
}

export default App; 