import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';
import AuthContext from '../../../containers/App'

class Person extends Component {
    render() {
        return <Aux >
            <AuthContext.Consumer >
                {auth => auth ? <p>Im authenticated</p> : null}
            </AuthContext.Consumer >
            <p onClick={this.props.clicks}>I'm {this.props.name} and I am {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name} />
           </Aux>
    }
}

Person.propTypes ={
    clicks: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default WithClass(Person, classes.Person);