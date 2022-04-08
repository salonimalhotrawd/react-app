import React, {Component} from 'react';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className='App'>Hi, I'm a React app</div>
    )

    /**
     * This is what the code represent during compilation process in the React.
     */
    // return(
    //   React.createElement('div',{className:'App'},React.createElement('h1',null, 'Hi, I/m a React app!!!!'))
    // )
  }
}

export default App;
