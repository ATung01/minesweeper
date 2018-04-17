import React from 'react'
import Box from './box'
import Mine from './mine'


class Grid extends React.Component {


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
            xCoord = {x}
            yCoord = {y}
            />
          )}
          else {
            rowArr.push(
              <Box
              key = {boxId}
              mineExists = {false}
              xCoord = {x}
              yCoord = {y}
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
