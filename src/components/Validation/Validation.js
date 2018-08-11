import React from 'react';

const Validation  = (props) => {
    let text = null;
    if( props.textLength > 5) {
        text = (
            <div>
                <p>Text is too long</p>
            </div>
        );
    }
    else {
        text = (
            <div>
                <p>Text is too short</p>
            </div>
        );
    }

    return (
        <div>
            {text}
        </div>
    );
};

export default Validation;