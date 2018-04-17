import React, { Component } from 'react';
import './App.css';
import Grid from './components/grid'
import Parameters from './components/Parameters'

class App extends Component {

  constructor(props) {
  super(props);
  this.state = {
    rows: 10,
    columns: 10,
    minesNum: 20
    }
  }

  generateBoard = () => {
    let board = []
    let minesPlaced = 0
    let numSquares = this.state.rows * this.state.columns

    for (let y = 0; y < this.state.columns; y++) {
      let rowArr = []

      for (let x = 0; x < this.state.rows; x++) {
        let square = {xCoord: x, yCoord: y, mineExists: false}
        minesPlaced += this.addMines(minesPlaced, square, numSquares, this.state.minesNum)
        rowArr.push(square)
        numSquares--
      }
      board.push(rowArr)
    }
    return board
  }

  addMines = (minesPlaced, square, numSquares, minesNum) => {
    let probability = Math.random() <= (minesNum - minesPlaced)/numSquares
    // probability evenly but still randomly spaces out the board
    // console.log("numSquares: ", numSquares, "minesPlaced: ", minesPlaced)

    if (numSquares === (minesNum - minesPlaced)) { // if the number of mines left would take up the remaining board
      square.mineExists = true
      return 1
    }
    else if (probability && minesPlaced < minesNum) {
      square.mineExists = true
      return 1
    }
    return 0
  }

  updateParams = (event) => {
    console.log(this.state, event)
    this.setState({
      rows: event.newRows,
      columns: event.newColumns,
      minesNum: event.newMines
    })
  }


  render() {
    return (
      <div className="App">
        <h1> Minesweeper, just the mines</h1>
        <Grid
          rows = {this.state.rows}
          columns = {this.state.columns}
          minesNum = {this.state.minesNum}
          generateBoard = {this.generateBoard}/>
        <Parameters
          rows = {this.state.rows}
          columns = {this.state.columns}
          minesNum = {this.state.minesNum}
          updateParams = {this.updateParams}/>
      </div>
    );
  }
}

export default App;
