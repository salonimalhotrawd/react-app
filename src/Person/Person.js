import React from "react";
import styled from "styled-components";

const StyledComponents = styled.div`
    {
        width:60%;
        margin:1rem auto;
        border:1px solid #eee;
        box-shadow:0 2px 3px #ccc;
        padding: 16px;
        text-align: center;
    }


    @media (min-width:500px) {
        color: white;
        width: 450px;
        background-color: black;
    }
`
const person = (props) => {
    return (
        <StyledComponents onClick={props.click}>
            <p>My name is {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledComponents>
    )
}
export default person;



