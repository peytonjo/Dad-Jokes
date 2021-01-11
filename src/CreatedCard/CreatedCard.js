import React from 'react'
import { Component } from 'react'
import Form from '../Form/Form'
import User from '../User/User'

class CreatedCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="created-joke-card" id={this.props.joke.id}>
        {!this.props.joke.joke && <p>Sorry, you're not funny</p>}
        {this.props.joke.joke && <p className="joke">{this.props.joke.joke}</p>}
      </div>
    )
  }
}

export default CreatedCard;