import React from 'react'
import { Component } from 'react'
import Form from '../Form/Form'
import User from '../User/User'

class CreatedCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="created-joke-card" id={props.joke.id}>
        <p className="joke">{props.joke.joke}</p>
      </div>
    )
  }
}