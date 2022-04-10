import React from "react";
import './UserOutput.css';

const userOutput = (props) => {
    const style = {
        cursor:'pointer',
        float: 'right'   
    }
    return (
        <div className="UserOutput">
           <span style={style} onClick={props.removePara}>X</span>
           <h5>{props.compName}</h5>
           <p>{props.paraText1}</p>
           <p>{props.paraText2}</p>
           <input type="text" placeholder="Custom Para" onChange={props.edit}/>
        </div>
    )
}
export default userOutput;



