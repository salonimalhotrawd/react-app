import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  /**
   * State property is only access in the class based component
   */
  state = {
    persons : [
      {name: 'Saloni Malhotra', age : 27},
      {name: 'Anmol Dogra', age : 28}
    ],

    designation : 'My Designation is Senior Associate Lead'
  }

  /**
   * @method switchCaseHandler
   * @this refers to the class this
   */
  switchCaseHandler = () => {
    console.log('I was clicked', this);
  }

  /**
   * @method switchCaseHandler
   * In this tradional function method the scope of this is undefined
   */
  // switchCaseHandler(){
  //   console.log(this, 'I was clicked');
  // }


  render(){
    return (
      <div className='App'>
        Hi, I'm a React app
        <button className='btn btn-primary' onClick={this.switchCaseHandler}>Switch Case</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>{this.state.designation}</Person>
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
