import React from 'react'
import { Component } from 'react'
import Form from '../Form/Form'
import CreatedCard from '../CreatedCard/CreatedCard'
import { Link } from 'react-router-dom'
import './User.scss'


class User extends Component {
 constructor(props) {
   super(props);
 }

 makeJokeCards = (jokes) => {
  return jokes.map(joke => <CreatedCard joke={joke} key={joke.id}/>)
 }

  render() {
   return (
      <section className="user-view">
        <article className="user-favs" alt="favorite jokes">
          <h1>Favorite Jokes</h1>
          {this.makeJokeCards(JSON.parse(localStorage.getItem('favoriteJokes')))}
        </article>
        <article className="users-jokes" alt="created jokes">
          <h1>Your Jokes</h1>
          {this.makeJokeCards(JSON.parse(localStorage.getItem('jokes')))}
        </article>
      </section>
   )
  }

  componentDidMount() {
    this.props.homeButtonDisplayUpdater(true)
  }
}

export default User;