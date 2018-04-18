import React from 'react'
import Box from './box'
import Mine from './mine'

class Grid extends React.Component {
  constructor(props){
    super(props)
    this.currentBoard = []
  }

  showBoard = () => {
    let board = this.props.generateBoard()
    let rowArr = []

    for (let y = 0; y < board.length; y++) {
      for (let x = 0; x < board[y].length; x++) {
        let boxId = x + "_" + y

        if (board[y][x].mineExists) {
          rowArr.push(
            <Mine
              key = {boxId}
              id = {boxId}
              mineExists = {true}
              xcoord = {x}
              ycoord = {y}/>
          )
        } else {
          rowArr.push(
            <Box
              key = {boxId}
              id = {boxId}
              mineExists = {false}
              xcoord = {x}
              ycoord = {y}
              findNeighbors = {this.findNeighbors}/>
          )
        }
      }
    }
    this.currentBoard = rowArr
  }

  findNeighbors = (id, xcoord, ycoord) => {
    console.log(id, xcoord, ycoord)
    const POSSIBLE_NEIGHBORS = [
      [-1,-1],[-1, 0],[-1, 1],
      [ 0,-1],       [ 0, 1],
      [ 1,-1],[ 1, 0],[ 1, 1]
    ];
    let neighbors = []
    POSSIBLE_NEIGHBORS.forEach((offset) => {
      let x = xcoord + offset[0]
      let y = ycoord + offset[1]
      if (x >= 0 && x < this.props.rows && y >= 0 && y < this.props.columns) {
        let boxId = x + "_" + y
        neighbors.push(boxId)
      }
    })

    console.log(neighbors)

    // this.currentBoard.filter((square) => {
    //   if (square.id ===) {
    //
    //   }
    // })
  }


  render() {
    const width = this.props.columns * 20
    return (
      <div className = "grid teal" style = {{width: width}}>
        {this.showBoard()}
        {this.currentBoard}
        {console.log(this.currentBoard[0].props)}
      </div>
    )
  }
}

export default Grid
