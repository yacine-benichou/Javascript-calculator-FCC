import React from 'react'
import './App.css';
import Button from './Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "0",
      outputValue: '',
      expression: "0"
    }
    this.handleClick = this.handleClick.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
  }

  handleClick(e) {
      this.setState({
        inputValue: this.state.inputValue === "0" ? e.target.value : this.state.inputValue + e.target.value 
      })
  }

  clearDisplay() {
    this.setState({
      inputValue: "0",
      outputValue: '',
      expression: "0"
    })
  }

  handleOperators(event) {
    this.setState({
      inputValue: this.state.inputValue + event.target.value.replace("X", "*")
    })
    
  }

  handleEqual() {
    let solution = Math.round(1000000 * eval(this.state.inputValue))/1000000;
    this.setState({
      inputValue: String(solution)
    })
  }
  


  render() {
    return(
      <div className = "outer-container">
        <div className = "display" id = "display">
          {this.state.inputValue}
        </div>
        <Button inputValue = {this.state.inputValue} handleEqual = {this.handleEqual} handleClick = {this.handleClick} clearDisplay = {this.clearDisplay} handleOperators = {this.handleOperators}/>
      </div>
    )
  }
}

export default App;
