import React, { Component } from 'react';

class Card extends Component {
 constructor(){
  super();
    this.state = {
      currentCard: {}
    }
  }
  render() {
    return (
    <div className="card-div">
      <p>Hello</p>
    </div>
    )
  }
}

export default Card; 