import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    Person:[{ id: "jhk123", name:"Tom", age:29 }, { id: "213dsa", name:"Sam", age:12 }, { id: "213kjhsad", name:"John", age:31 } 
    ],
    switchPerson: false
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
    const toggle = this.state.switchPerson;
    this.setState({switchPerson: !toggle}); 
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.Person.slice();
    const persons = [...this.state.Person];
    persons.splice(personIndex, 1);
    this.setState({Person: persons});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'black',
      font: 'inherit',
      border: '1px solid blue',
      padding: '1px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'blue',
        color: 'black'
      }
    };
    let persons = null;
    if(this.state.switchPerson){
      persons = (
        <div>
          {this.state.Person.map( (person, index) => {
            return <Person 
            clicks={() => this.deletePersonHandler(index)} 
            name={person.name} age={person.age} key={person.id}
            changed={(event) => this.textChangedHandler(event,person.id)}/>
          })}
          </div>
      )
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'yellow',
        color: 'black'
      }
    }

    const classes = [];
    if( this.state.Person.length<=2){
      classes.push('red');
    }
    if( this.state.Person.length<=1){
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, Im a react app</h1>
          <p className={classes.join(' ')}>This is working</p>
          <button style={style}
          onClick={this.toggelPersonHandler}>Switch Person</button>
          {persons}
        </div>
      </StyleRoot>
    );
    //return (React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This works now?')));
  }
}

export default Radium(App);
