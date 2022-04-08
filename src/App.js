import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  render(){
    return (
      <div className='App'>
        Hi, I'm a React app
        <Person/>
      </div>
    )

    /**
     * This is what the code represent during compilation process in the React.
     * We can pass the infinite number of parameters in the createElement Method
     * 3 Paramters is mandatory
     * First paramter represents the HTML element
     * Second parameter represents the Object
     * Third parameter represents the Message to display on to the UI
     */
    // return(
    //   React.createElement('div',{className:'App'},React.createElement('h1',null, 'Hi, I/m a React app!!!!'))
    // )
  }
}

export default App;
