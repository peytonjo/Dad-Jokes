import React, { Component } from 'react'
import './RandomJoke.scss'

class RandomJoke extends Component {
  constructor(props) {
    super(props);
  }

  addFavoritedJoke = event => {
    event.preventDefault();
    const newJoke = {
      id: Date.now(),
      joke: this.props.joke,
      status: 200
    }
    if (!JSON.parse(localStorage.getItem('favoriteJokes'))) {
      localStorage.setItem('favoriteJokes', JSON.stringify([newJoke]))
    } else {
      const oldJokesArray = JSON.parse(localStorage.getItem('favoriteJokes'))
      oldJokesArray.push(newJoke)
      localStorage.setItem('favoriteJokes', JSON.stringify(oldJokesArray))
    }
  } 

  render() {
    return (
      <section className="app-body">
        <p className="joke-card">{this.props.joke}</p>
        <div className="joke-btns">
          <button className="add-favorite" onClick={this.addFavoritedJoke}>Favorite</button>
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