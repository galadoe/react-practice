import React, { Component } from 'react'
import Square from './components/Square'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      squares: ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
    }
  }

  handleClick = () => {
    alert("You've clicked me!")
  }

  render(){
    return(
      <>
        <h2>Tic-tac-toe</h2>
        <div className = "gameboard">
          {this.state.squares.map(value => {
            return(
              <Square value = {value}/>
            )
          })}
        </div>
      </>
    )
  }
}

export default App;
