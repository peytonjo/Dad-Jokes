import React from 'react'
import { Component } from 'react'
import './Form.scss'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
    }
  }

  render() {
    return (
      <form className="joke-form">
        <input placeholder="Example: How do you get a squirrel to like you? Act like a nut." type="text"></input>
        <button type="submit" value="Submit">Submit</button>
      </form>
    )
  }
}

export default Form; 
