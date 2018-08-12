import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    let btnClass = '';
    if(props.showPerson){
        btnClass = classes.Red;
    }
    const assignedClass = [];
    if( props.persons.length<=2){
        assignedClass.push(classes.red);
    }
    if( props.persons.length<=1){
        assignedClass.push(classes.bold);
    }
    
    return (
        <div className={classes.Cockpit}>
            <h1>Hi, Im a react app</h1>
            <p className={assignedClass.join(' ')}>This is working</p>
            <button className={btnClass}
            onClick={props.clicked}>Switch Person</button>
        </div>
    );
};

export default cockpit;