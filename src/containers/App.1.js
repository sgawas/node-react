import React, { Component } from 'react';
import './App.css';
import Person1 from './Person/Person';

class App extends Component {
  state = {
    Person:[{ name:"Tom", age:29 }, { name:"Sam", age:12 }, { name:"John", age:31 } 
    ]
  };

  buttonSwitchHandler = (newName) => {
    //console.log('was clicked!');
    // NOT Valid this.state.Person[0].name="Tom Cruise";
    this.setState({Person:[{ name:newName, age:29 }, { name:"Sam", age:12 }, { name:"John", age:30 }]});
  };

  textChangedHandler = (event) => {
    this.setState({Person:[{ name: "Tom", age:29 }, { name:event.target.value, age:12 }, { name:"John", age:30 }]});
  };

  inputTextHandler = (event) => {
    this.setState({username: event.target.value});
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '1px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, Im a react app</h1>
        <p>This is working</p>
        <button style={style}
        onClick={() => this.buttonSwitchHandler('John Cena')}>Switch button</button>
        <Person 
        name={this.state.Person[0].name} 
        age={this.state.Person[0].age}/>
        <Person 
        name={this.state.Person[1].name} 
        age={this.state.Person[1].age}
        clicks={this.buttonSwitchHandler.bind(this,'Suraj!!!')}
        changed={this.textChangedHandler}>My hobbies: gambling</Person>
        <Person 
        name={this.state.Person[2].name} 
        age={this.state.Person[2].age}/>
      </div>
    );
    //return (React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This works now?')));
  }
}

export default App;
