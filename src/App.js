import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './shine.png';
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state={};
  }
  on
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
function clock(){
  const element=(<h1>
    Klockan är {new Date().toLocaleTimeString()}.
  </h1>);
  ReactDOM.render(element,document.getElementById('root'));
}
setInterval(clock,1000);

export default App;
