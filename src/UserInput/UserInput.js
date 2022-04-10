import React from "react";
import './UserInput.css';

const userInput = (props) => {
    return (
        <div className="UserInput">
           <h5>{props.compName}</h5>
           <input type="text" onChange={props.changed} value={props.name}/>
           <br/>
           <strong>{props.paraTitle}</strong>
           <br/>
           <input type="text" onBlur={props.paraChanged} placeholder='Add paragraph'/>
        </div>
    )
}
export default userInput;



