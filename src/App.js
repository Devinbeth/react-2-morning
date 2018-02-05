import React, { Component } from 'react';
import './App.css';
import Child from './Child.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      number: 0
    };
    this.increaseNumber = this.increaseNumber.bind(this);
  }
  increaseNumber(){
    this.setState({number: this.state.number + 1});
  }
  render() {
    return (
      <div className="App" style={{background: '#ddd', height: '300px', padding: '50px'}}>
        <h1>PARENT!</h1>
        {/* <button onClick={() => this.increaseNumber()}>Increase number</button> */}
        <Child greeting='hello' num={this.state.number} increaseFn={this.increaseNumber}/>
      </div>
    );
  }
}
export default App;