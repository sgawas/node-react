import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    Person:[{ id: "jhk123", name:"Tom", age:29 }, { id: "213dsa", name:"Sam", age:12 }, { id: "213kjhsad", name:"John", age:31 } 
    ],
    showPerson: false
  };

  buttonSwitchHandler = (newName) => {
    this.setState({Person:[{ name:newName, age:29 }, { name:"Sam", age:12 }, { name:"John", age:30 }]});
  };

  textChangedHandler = (event, id) => {
    const personIndex = this.state.Person.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.Person[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.Person];
    persons[personIndex] = person;
    this.setState({Person : persons});
  };

  toggelPersonHandler = () => {
    const toggle = this.state.showPerson;
    this.setState({showPerson: !toggle}); 
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.Person.slice();
    const persons = [...this.state.Person];
    persons.splice(personIndex, 1);
    this.setState({Person: persons});
  }

  render() {
    let persons = null;
    if(this.state.showPerson){
      persons = (
        <div>
          <Persons persons={this.state.Person} 
          clicked={this.deletePersonHandler} 
          changed={this.textChangedHandler}/>
        </div>
      )
    }

    return (
      <div className={classes.App}>
        <Cockpit 
        appTitle={this.props.title}
        showPerson={this.state.showPerson} 
        persons={this.state.Person}
        clicked={this.toggelPersonHandler}/>
        {persons}
      </div>
    );
    //return (React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This works now?')));
  }
}

export default App;
