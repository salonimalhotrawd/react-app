import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    title: 'React Pracitce',
    compName1: 'UserInput Section',
    compName2: 'UserOutput Section',
    addingParaInputTitle: 'Add Para Dynamically',
    paraText: [
      { id: 1, paraText1: 'I am 27 years old', paraText2: 'I am Senior Software Engineer' },
      { id: 2, paraText1: 'I am 28 years old', paraText2: 'I am Senior Project Manager' }
    ]
  }

  /**
   * @method inputUserChanged
   * @param {*} event conatins target value
   */
  inputUserChanged = (event) => {
    const newTitle = event.target.value;
    this.setState({title:newTitle})
  }

  /**
   * @method addParaText
   * @param {*} event contains event target value
   * @param {*} paraId contains the id of the paragraph
   */
  editParaText = (event, paraId) => {
    if (event.target.value) {
      const paraTextList = [...this.state.paraText];
      const paraIndexFound = paraTextList.findIndex(pt => { return pt.id == paraId });
      if (paraIndexFound >= 0) {
        const paraFound = paraTextList[paraIndexFound];
        paraFound.paraText2 = event.target.value;
        this.setState({ paraText: paraTextList });
      }
    }
  }

  /**
   * @method removePara
   * @param {*} paraId contains unique id of the element
   */
  removeParaText = (paraId) => {
    const paraTextList = [...this.state.paraText];
    const paraIndexFound = paraTextList.findIndex(pt => { return pt.id == paraId });
    if (paraIndexFound >= 0) {
      paraTextList.splice(paraIndexFound,1)
      this.setState({ paraText: paraTextList });
    }
  }

  /**
   * @method paraChanged
   * Dynamically append paras and show into the output component
   * @param {*} event contains the event value
   */
  paraChanged = (event) => {
    if (event.target.value) {
      const paraId = this.state.paraText.length + 1;
      const paraObj = {
        id: paraId,
        paraText1: event.target.value,
        paraText2: 'Adding ' + paraId + ' custom Para Dynamically'
      }
      let newParaList = [...this.state.paraText];
      newParaList.push(paraObj);
      this.setState({ paraText: newParaList });
    }
  }


  render() {
    let paras = (
      <div>
        {
          this.state.paraText.map((para, index) => {
            return (
              <UserOutput
                compName={this.state.compName2}
                paraText1={para.paraText1}
                paraText2={para.paraText2}
                edit={(event) => this.editParaText(event, para.id)}
                removePara={() => this.removeParaText(para.id)}
                key={para.id} />
            )
          })
        }
      </div>
    )

    return (
      <div className='App'>
        <h4>{this.state.title}</h4>
        <UserInput
          compName={this.state.compName1}
          paraTitle={this.state.addingParaInputTitle}
          changed={(event) => this.inputUserChanged(event)}
          paraChanged={(event) => this.paraChanged(event)}
          name={this.state.title} />
        {paras}
      </div>
    )
  }
}

export default App;
