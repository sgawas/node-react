import React from 'react';

const cockpit = () => {

    const classes = [];
    if( props.Person.length<=2){
      classes.push('red');
    }
    if( props.Person.length<=1){
      classes.push('bold');
    }

    return (
        <div>
            <h1>Hi, Im a react app</h1>
            <p className={classes.join(' ')}>This is working</p>
            <button style={style}
            onClick={this.toggelPersonHandler}>Switch Person</button>
        </div>
    );
}