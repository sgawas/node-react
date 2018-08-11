import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    username: "max"
  };

  textChangedHandler = (event) => {
    this.setState({username: event.target.value});
  }

  clickedTextHandler = (name) => {
    this.setState({username: name});
  }

  render() {
    return (
      <div className="App">
          <UserInput changed={this.textChangedHandler} currentValue={this.state.username}/>
          <UserOutput username={this.state.username}/>
          <UserOutput username={this.state.username}/>
          <UserOutput username="suraj" clicks={this.clickedTextHandler.bind(this,"suraj1310")}/>
      </div>
    );
  }
}

export default App;
