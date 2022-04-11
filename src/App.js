import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from "styled-components";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const StyledButton = styled.button`
    background-color: ${props => props.alt == 'true' ? 'green' : '#10afa0'};
    color:white;
    font:inherit;
    border:1px solid #10afa0;
    padding:8px;
    margin-top:1rem;
    cursor:pointer;

    &:hover{
      background-color: ${props => props.alt == 'true' ? 'purple' : 'red'};;
      color:white;
    }
`;

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
    designation: 'My Designation is Senior Associate Lead',
    showPersonList: false
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

  /**
   * @method togglePersonComp
   * toggle Person List
   */
  togglePersonComp = () => {
    const showList = this.state.showPersonList;
    this.setState({ showPersonList: !showList });
  }

  render() {
    // In React we can also do inline-styling.For that we will have to create js object and then wrap dynamically 
    // it with the style property provided by the JSX
    //POINT TO REMEBER: We cannot use directly css property in the inline-style.We have to use the camelCase to define
    //the style property or we have to wrap the property with the single and dbl commas and also the property value
    //must be wrap with the single and dbl commas to render it on the UI

    const style = {

    }

    //Whenever something is update in the state render methods render automatically.
    let person = null;
    if (this.state.showPersonList) {
      person = (
        <div>
          <ErrorBoundary>
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
          </ErrorBoundary>
        </div>
      )
    }

    const classes = [];

    if (this.state.persons.length > 0) {
      classes.push('red', 'size', 'weight');
    }

    return (
      <div className='App'>
        <span className={classes.join(' ')}>{this.state.title}</span>
        <br />
        <StyledButton alt={(this.state.showPersonList).toString()} onClick={this.togglePersonComp}>
          Toggle Persons
        </StyledButton>
        {person}
      </div>
    )
  }
}

export default App;
