import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './shine.png';
import Chessboard from 'chessboardjsx';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), isToggleOn:true };

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {

    this.setState({
      date: new Date()
    });
  }
  handleClick(){
    this.setState(state=>({
      isToggleOn: !state.isToggleOn
    }));
  } 
 
  render() { 
    return (
      <div >
        <h1>Nicki Berlin</h1>
        <h2> It is {this.state.date.toLocaleTimeString()}</h2>
        <Chessboard position="start" />
      
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'On' : 'Off'}
      </button>
      </div>
    );
  }
}
export default App;
