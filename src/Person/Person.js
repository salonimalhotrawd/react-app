// Components are awesome.because we can focus our code each file 
// hence, it makes much more maintainable not put everything into app.js file. 
//For Bigger app it is really crowded if we put everything into the main root file
//Also,Components are reusable and reconfigurable

import React from "react";

const person = () => {
    return <p>I am person Component and I am {Math.floor(Math.random() * 30)}</p>
}

export default person;



