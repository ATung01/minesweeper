import React from 'react'


class Box extends React.Component {


  handleClick = (event) => {
    console.log(this.props)
  }

  render() {
    return (
      <div className = "box"
      key = {this.key}
      xcoord = {this.props.xcoord}
      ycoord = {this.props.ycoord}
      onClick  = {this.handleClick}
       >
      </div>
    )
  }
}


export default Box
