import React from 'react'
import { Component } from 'react'
import User from '../User/User'
import './Form.scss'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
    }
  }

  clearInputs = () => {
    this.setState({ input: '' })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  makeNewJoke = event => {
    event.preventDefault();
    const newJoke = {
      id: Date.now(),
      joke: this.state.input,
      status: 200
    }
    if (!JSON.parse(localStorage.getItem('jokes'))) {
      localStorage.setItem('jokes', JSON.stringify([newJoke]))
    } else {
      const oldJokesArray = JSON.parse(localStorage.getItem('jokes'))
      oldJokesArray.push(newJoke)
      localStorage.setItem('jokes', JSON.stringify(oldJokesArray))
    }
    this.clearInputs()
  }

  render() {
    return (
      <form className="joke-form" alt="form">
        <textarea type='text-area' name='input' placeholder="Example: How do you get a squirrel to like you? Act like a nut." value={this.state.input} alt="joke input box" onChange={event => this.handleChange(event)}></textarea>
        <button type="submit" value="Submit" className="form-submit" alt="form submit button" onClick={event => this.makeNewJoke(event)}>Submit</button>
      </form>
    )
  }

  componentDidMount() {
    this.props.homeButtonDisplayUpdater(true)
  }
}

export default Form;
