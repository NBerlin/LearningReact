import React, { Component } from 'react';
import logo from './shine.png';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           <h1>Blip Blip</h1>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
