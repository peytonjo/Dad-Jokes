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
      <form className="joke-form" alt="form">
        <input placeholder="Example: How do you get a squirrel to like you? Act like a nut." type="text" alt="joke input box"></input>
        <button type="submit" value="Submit" className="form-submit" alt="form submit button">Submit</button>
      </form>
    )
  }

  componentDidMount() {
    this.props.homeButtonDisplayUpdater(true)
  }
}

export default Form;
