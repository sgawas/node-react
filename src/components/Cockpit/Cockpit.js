import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    let btnClass = classes.Button;
    if(props.showPerson){
        btnClass = [classes.Button,classes.Red].join(' ');
    }
    const assignedClass = [];
    if( props.persons.length<=2){
        assignedClass.push(classes.red);
    }
    if( props.persons.length<=1){
        assignedClass.push(classes.bold);
    }
    
    return (
        <Aux >
            <h1>{props.appTitle}</h1>
            <p className={assignedClass.join(' ')}>This is working</p>
            <button className={btnClass}
            onClick={props.clicked}>Switch Person</button>
        </Aux>
    );
};

export default cockpit;