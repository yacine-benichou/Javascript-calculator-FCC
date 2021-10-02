import React from "react"; 

class Button extends React.Component {

    render() {
        return(
            <div className = "button-container">
                <button onClick = {this.props.clearDisplay} id = "clear">AC</button>
                <button onClick = {this.props.handleOperators} id = "add" value = "+">+</button>
                <button onClick = {this.props.handleOperators} id = "subtract" value = "-">-</button>
                <button onClick = {this.props.handleClick} id = "seven" value = "7">7</button>
                <button onClick = {this.props.handleClick} id = "eight" value = "8">8</button>
                <button onClick = {this.props.handleClick} id = "nine" value = "9">9</button>
                <button onClick = {this.props.handleOperators} id = "multiply" value = "*">X</button>
                <button onClick = {this.props.handleClick} id = "four" value = "4">4</button>
                <button onClick = {this.props.handleClick} id = "five" value = "5">5</button>
                <button onClick = {this.props.handleClick} id = "six" value = "6">6</button>
                <button onClick = {this.props.handleOperators} id = "divide" value = "/">/</button>
                <button onClick = {this.props.handleClick} id = "one" value = "1">1</button>
                <button onClick = {this.props.handleClick} id = "two" value = "2">2</button>
                <button onClick = {this.props.handleClick} id = "three" value = "3">3</button>
                <button onClick = {this.props.handleEqual} id = "equals">=</button>
                <button onClick = {this.props.handleClick} id = "zero" value = "0">0</button>
                <button onClick = {this.props.handleDecimal} id = "decimal" value = ".">.</button>
            </div>
        )
    }
}


export default Button;