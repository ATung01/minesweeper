import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class Parameters extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    newRows: 10,
    newColumns: 10,
    newMines: 20
    }
  }

  handleClick = (event) => {
    console.log(this.props)
  }

  updateRows = (event) => {
    let newVal = parseInt(event.target.value, 10)

    this.setState({
      newRows: newVal
    })
  }

  updateColumns = (event) => {
    let newVal = parseInt(event.target.value, 10)

    this.setState({
      newColumns: newVal
    })
  }

  updateMines = (event) => {
    let newVal = parseInt(event.target.value, 10)

    this.setState({
      newMines: newVal
    })
  }

  stopDefault = (event) => {
    event.preventDefault()
    this.props.updateParams(this.state)
  }

  render() {
    return (
      <div className = "parameter" >
        <Form>
          <Form.Field>
            <label>Number of Rows</label>
            <br/>
            <input placeholder={this.props.rows} onChange={this.updateRows}/>
          </Form.Field>
          <Form.Field>
            <label>Number of Columns</label>
            <br/>
            <input placeholder={this.props.columns} onChange={this.updateColumns}/>
          </Form.Field>
          <Form.Field>
            <label>Number of Mines</label>
            <br/>
            <input placeholder={this.props.minesNum} onChange={this.updateMines}/>
          </Form.Field>
        </Form>
        <br/>
        <Button onClick={this.stopDefault} >Submit</Button>
      </div>
    )
  }
}


export default Parameters
