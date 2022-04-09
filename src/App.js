import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  /**
   * State property is only access in the class based component
   */
  state = {
    title: 'React Complete Guide - 2022',
    persons: [
      { name: 'Saloni Malhotra', age: 27 },
      { name: 'Anmol Dogra', age: 28 }
    ],
    designation: 'My Designation is Senior Associate Lead'
  }

  /**
   * @method switchCaseHandler
   * @this refers to the class this
   */
  switchCaseHandler = (newName) => {
    /**
     * @setState Method is provided by the react to update the new State
     * This method basically merge the old state with the new state without hmapering the other state properties and values
    */
    //DON"T DO THIS: this.state.persons[1].name = 'Anmol Bharat Dogra'
    this.setState({
      persons: [{
        name: 'Saloni Malhotra',
        age: 27
      },
      {
        name: newName,
        age: 28
      }
      ],
      designation: 'My Designation is Senior Project Manager'
    })
  }

  /**
   * @method nameChangedHandler
   * @param {*} event conatins event value
   */
  nameChangedHandler = (event) => {
    this.setState({
      persons: [{
        name: event.target.value,
        age: 27
      },
      {
        name: 'Anmol Bharat Dogra',
        age: 29
      }]
    })
  }

  render() {
    return (
      <div className='App'>
        <h4>{this.state.title}</h4>
        {/* This is the tradional way of passing the parameters in the method and it is also the
        efficient way.It is cld function borrowing */}
        <button className='btn btn-primary' onClick={this.switchCaseHandler.bind(this, 'Anmol Bharat Dogra')}>Switch Case</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changed={this.nameChangedHandler} />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchCaseHandler.bind(this, 'Anmol!!!!')}>
          {this.state.designation}
        </Person>
      </div>
    )
  }
}

export default App;
