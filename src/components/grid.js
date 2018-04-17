import React from 'react'
import Box from './box'
import Mine from './mine'


class Grid extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    minesPlaced: 0,
    numSquares: this.props.rows * this.props.columns
    }
  }



  addMine = () => {
    this.setState({
      minesPlaced: this.state.minesPlaced + 1
    })
  }
  minusSquare = () => {
    this.setState({
      numSquares: this.state.numSquares - 1
    })
  }
  showBoard = () => {
    let board = this.props.generateBoard()
    let rowArr = []
    for (let y = 0; y < board.length; y++) {
      for (let x = 0; x < board[y].length; x++) {
        let boxId = y + "_" + x;
        if (board[y][x].mineExists) {
          rowArr.push(
            <Mine
            key = {boxId}
            mineExists = {true}
            />
          )}
          else {
            rowArr.push(
              <Box
              key = {boxId}
              mineExists = {false}
              />
            )}
          }
        }
        return rowArr
      }



  render() {
    const width = this.props.columns * 16



    return (
      <div className = "grid teal" style = {{width: width}}>
        {this.showBoard()}

      </div>
    )
  }
}

export default Grid
