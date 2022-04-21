import React, { Component } from 'react'

export default class Button extends Component {
   
  render() {
    return (
        // handleClick is a VARIABLE that represents the parent method 'handleButtonClick'
        <button onClick={() => this.props.handleClick(this.props.step)} className='btn btn-primary'>Step: {this.props.step}</button>
    )
  }
}
