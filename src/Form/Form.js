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

  handleChange = event => {
    localStorage.setItem(event.target.name, event.target.value);

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


    // const newCard = (
    //   <div className="created-joke-card" id={newJoke.joke}>
    //     <p className="joke">{newJoke.joke}</p>
    //   </div>)
    // User.addNewJoke(newCard)
  } 

  render() {
    return (
      <form className="joke-form" alt="form">
        <input name='input' placeholder="Example: How do you get a squirrel to like you? Act like a nut." type="text" alt="joke input box" onChange={event => this.handleChange(event)}></input>
        <button type="submit" value="Submit" className="form-submit" alt="form submit button" onClick={event => this.makeNewJoke(event)}>Submit</button>
      </form>
    )
  }

  componentDidMount() {
    this.props.homeButtonDisplayUpdater(true)
  }
}

export default Form;
