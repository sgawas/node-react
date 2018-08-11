import React from 'react';
import './UserOutput.css';

const UserOutput1 = (props) => {
    return  <div className="UserOutput">
                <p onClick={props.clickedUsername}>my username is {props.username}</p>
                <p>This is assignment 1 for {props.username}</p>
                <p>{props.children}</p>
            </div>
}

export default UserOutput1;