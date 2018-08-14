import React, {Component} from 'react';

import Person from './Person/Person';

class Persons extends Component {
    render() {
        return ( this.props.persons.map( (person, index) => {
            return <Person 
            clicks={() => this.props.clicked(index)} 
            name={person.name} 
            age={person.age} 
            key={person.id}
    //        authenticated={this.props.isAuthenticated}
            changed={(event) => this.props.changed(event,person.id)}/>
          }));
    }
}

export default Persons;