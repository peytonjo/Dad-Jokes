import React, { Component } from 'react'
import './RandomJoke.scss'

class RandomJoke extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="app-body">
        <p className="joke-card">{this.props.joke}</p>
        <div className="joke-btns">
          <button className="add-favorite">Favorite</button>
          <button className="next-joke" onClick={this.props.loadNewJoke}>Next</button>
        </div>
      </section>
    )
  }

  componentDidMount() {
    this.props.homeButtonDisplayUpdater(false)
  }
}

export default RandomJoke