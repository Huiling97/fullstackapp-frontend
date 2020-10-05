import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component { // react.component is used to define a react component class
  constructor(props) { // constructor: method which is automatically called during creation of object from class
      super(props); // super: calls constructor of parent class
      this.state = { serverResponse: "" }; // this refers to app
  }

  callAPIServer() {
      fetch("http://localhost:7000/mypage")
          .then(res => res.text()) // returns with text content
          .then(res => res.json()) // returns with json content
          .then(res => this.setState({ serverResponse: res }))
          .catch(err => err);
  }
  componentDidMount() {   // react lifecycle method componentDidMount() 
                        // will execute the callAPIserver() method after the component mounts (inserted into the DOM).
      this.callAPIServer(); //calls 'callAPIServer' 

  }
  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to FintechSG React Course</h1>
              
              <h2 className="App-intro">{this.state.serverResponse}</h2>
              </header>
          </div>
      );
  }
}

export default App;



