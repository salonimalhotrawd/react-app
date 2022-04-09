import React from "react";
import './Person.css';

/**
 * @Components Components are awesome.because we can focus our code each file 
 * hence, it makes much more maintainable not put everything into app.js file. 
 * For Bigger app it is really crowded if we put everything into the main root file
 * Also,Components are reusable and reconfigurable
 */

/**
 * @props props refers to the properties which we passed into the function and the class
 * We can use props to get the dynamic content from it which we passed from one component to another
 * In case of class we will use `this.props` to access the properties and its values
 */

/**
 * @props children basically reserved words. Children refers to any elements between the opening and closing tag of the component
 * We can pass the complex code and plain HTML text inside it too
 */

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>My name is {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}
export default person;



