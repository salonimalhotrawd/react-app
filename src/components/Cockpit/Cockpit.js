import React from 'react';

const cockpit = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <button
                style={props.style}
                onClick={props.clicked}>Toggle Person
            </button>
        </div>
    )
}


export default cockpit;