import React from 'react'
import './App.css';
import Button from './Button';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "0",
      expression: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
  }

  // handle the click on all numbers

  handleClick(e) {
    if (this.state.expression.endsWith("-")) {
      this.setState({
      inputValue: this.state.inputValue + e.target.value,
      expression: this.state.expression + e.target.value
     })
    } else {
      this.setState({
      inputValue: this.state.inputValue === "0" ? e.target.value : this.state.inputValue.replace(/([-+*/])+/g, "$1") + e.target.value,
      expression: this.state.expression === "" ? e.target.value : this.state.expression.replace(/([-+*/])+/g, "$1") + e.target.value
    })
    }
  
  }

  // handle the clear button

  clearDisplay() {
    this.setState({
      inputValue: "0",
      expression: ""
    })
  }

  // handle the operator buttons 

  handleOperators(event) {
    let result = event.target.value;
    if (/[+-/*]$/.test(this.state.expression) && result !== "-") {
      this.setState({
        inputValue: result,
        expression: this.state.expression.replace(/[+-/*]$/, "") + result
      })
    } else {
      this.setState({
        inputValue: result,
        expression: this.state.expression + result
        })
    }
  }

  // handle the equal button 

  handleEqual() {
    if (/[+-/*]$/.test(this.state.expression) || this.state.expression.endsWith("/0")) {
      this.setState({
        inputValue: "Error",
        expression: ""
      })
    }
    else {
      let solution = Math.round(1000000 * eval(this.state.expression))/1000000;
      this.setState({
      inputValue: String(solution),
      expression: String(solution)
    })
    }
  }

  // handle the decimal button

handleDecimal(event) {
  let result = event.target.value;
  if (!this.state.inputValue.includes(".")) {
    this.setState({
      inputValue: this.state.inputValue + result,
      expression: this.state.expression + result
    })
  }
}



  render() {
    return(
      <div className="app-container">
        <div className = "outer-container">
        <div className = "expression-display">
          {this.state.expression}
        </div>
        <div className = "display" id = "display">
          {this.state.inputValue}
        </div>
        <Button inputValue = {this.state.inputValue}
                handleEqual = {this.handleEqual} 
                handleClick = {this.handleClick} 
                clearDisplay = {this.clearDisplay} 
                handleOperators = {this.handleOperators} 
                handleDecimal = {this.handleDecimal} />
        </div>
      </div>
    )
  }
}

export default App;
