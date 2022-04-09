import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [initialStateTiltle, updatedStateTitle] = useState({
    title: 'React Complete Guide - 2022'
  });

  const [initialUseState, updatedUseState] = useState({
    persons: [
      { name: 'Saloni Malhotra', age: 27 },
      { name: 'Anmol Dogra', age: 28 }
    ],
    designation: 'My Designation is Senior Associate Lead'
  });

  /**
  * @method switchCaseHandler
  * @this refers to the class this
  */
  const switchCaseHandler = () => {
    updatedUseState({
      persons: [{
        name: 'Saloni Malhotra',
        age: 27
      },
      {
        name: 'Anmol Bharat Dogra',
        age: 28
      }
      ],
      designation: 'My Designation is Senior Project Manager'
    })
  }

  return (
    <div className='App'>
      <h4>{initialStateTiltle.title}</h4>
      <button className='btn btn-primary' onClick={switchCaseHandler}>Switch Case</button>
      <Person name={initialUseState.persons[0].name} age={initialUseState.persons[0].age} />
      <Person name={initialUseState.persons[1].name} age={initialUseState.persons[1].age}>{initialUseState.designation}</Person>
    </div>
  )
}

export default App;


