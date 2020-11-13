import './App.css';
import React from 'react';
import ValidationComponent from './components/ValidationComponent/ValidationComponent';
import CharComponent from './components/CharComponent/CharComponent'

class App extends React.Component {
  state = {
    username: ""
  }
  updateNameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  deleteCharHandler = (index) => {
    const text = this.state.username.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({username: updatedText});
  }
  render() {
    let charList = this.state.username.split('').map((chart, i) => {
      return <CharComponent
        character={chart}
        key={i}
        clicked={() => this.deleteCharHandler(i)}
      ></CharComponent>
    })
    return (
      <div className="App">
        <input type="text" onChange={this.updateNameHandler} value={this.state.username} />
        <ValidationComponent length={this.state.username.length}></ValidationComponent>
        {charList}
      </div>
    );
  }
}
export default App;
