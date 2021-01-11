import React from 'react'
import { Component } from 'react'
import { getFavoriteJokes, getUserJokes } from '../localStorage'
import CreatedCard from '../CreatedCard/CreatedCard'
import './User.scss'


class User extends Component {
  constructor(props) {
    super(props);
  }

  makeJokeCards = (jokes) => {
    return jokes.map(joke => <CreatedCard joke={joke} key={joke.id} />)
  }

  render() {
    return (
      <section className="user-view">
        <article className="user-favs" alt="favorite jokes">
          <h1>Favorite Jokes</h1>
          {getFavoriteJokes() ? this.makeJokeCards(getFavoriteJokes()) : <p>This is where my favorite jokes would go... IF I HAD ANY</p>}
        </article>
        <article className="users-jokes" alt="created jokes">
          <h1>Your Jokes</h1>
          {getUserJokes() ? this.makeJokeCards(getUserJokes()) : <p>This is where my jokes would go... IF I HAD ANY</p>}
        </article>
      </section>
    )
  }

  componentDidMount() {
    this.props.homeButtonDisplayUpdater(true)
  }
}

export default User;