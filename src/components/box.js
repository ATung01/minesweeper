import React from 'react'

class Box extends React.Component {
  handleClick = () => {
    // console.log(this.props)
    this.props.findNeighbors(
    this.props.id,
    this.props.xcoord,
    this.props.ycoord)
  }

  render() {
    return (
      <div className = "box"
        key = {this.key}
        xcoord = {this.props.xcoord}
        ycoord = {this.props.ycoord}
        onClick  = {this.handleClick}>
        <div className = "number">
          
        </div>
      </div>
    )
  }
}


export default Box
