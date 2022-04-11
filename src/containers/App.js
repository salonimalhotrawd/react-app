import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';

class App extends Component {
  /**
   * State property is only access in the class based component
   */
  state = {
    title: 'React Complete Guide - 2022',
    persons: [
      { id:'1', name: 'Saloni Malhotra', age: 27 },
      { id:'2', name: 'Anmol Dogra', age: 28 }
    ],
    designation: 'My Designation is Senior Associate Lead',
    showPersonList: false
  }

  /**
   * @method togglePersonComp
   * toggle Person List
  */
  togglePersonComp = () => {
    const showList = this.state.showPersonList;
    this.setState({ showPersonList: !showList });
  }

  /**
   * @method nameChangeHandler
   * nameChangeHandler method and update the state
  */
  nameChangeHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex((person) => {return person.id == id});
    if(personIndex >= 0){
      let person = {...this.state.persons[personIndex]};
      person.name = event.target.value;
      let originalPersons = [...this.state.persons]
      originalPersons[personIndex] = person;
      this.setState({persons:originalPersons});
    }
  }

  /**
   * @method deletePersonHandler
   * @param {*} personIndex 
   */
  deletePersonHandler = (personIndex) => {
    //In JavaScript arrays and objects are referenced type so whenever we do manipulation we have to 
    //make the copy first then perform the OfflineAudioCompletionEvent otherwise it will update the 
    //actual State.

    //const persons = this.state.persons.slice;
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  render() {
    // In React we can also do inline-styling.For that we will have to create js object and then wrap dynamically 
    // it with the style property provided by the JSX
    //POINT TO REMEBER: We cannot use directly css property in the inline-style.We have to use the camelCase to define
    //the style property or we have to wrap the property with the single and dbl commas and also the property value
    //must be wrap with the single and dbl commas to render it on the UI

    const style = {
      backgroundColor: '#10afa0',
      font: 'inherit',
      border: '1px solid #10afa0',
      padding: '8px',
      cursor: 'pointer'
    }

    //Whenever something is update in the state render methods render automatically.
    let person = null;
    if (this.state.showPersonList) {
      person = (
        <div>
          {
            this.state.persons.map((person,index) => {
              return( 
                <Person 
                  name={person.name} 
                  age={person.age} 
                  key={person.id}
                  click={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangeHandler(event,person.id)}/>
               )
            })
          }
        </div>
      )
    }
    
    return (
      <div className='App'>
        <h4>{this.state.title}</h4>
        <button
          style={style}
          onClick={this.togglePersonComp}>Toggle Person
        </button>
        {person}
      </div>
    )
  }
}

export default App;
