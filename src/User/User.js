import React from 'react'
import { Component } from 'react'
import './User.scss'


class User extends Component {
 constructor() {
   super()
 }

  render() {
   return (
    <section className="user-view">
      <article className="user-favs">
        <h1>Favorite Jokes</h1>
        <div className="joke-card">this is a joke</div>
      </article>
      <article className="users-jokes">
        <h1>Your Jokes</h1>
        <div className="joke-card">
          <p className="joke">Duis commodo ante in ipsum ornare consectetur. Duis congue quam sit amet metus suscipit pulvinar. Cras mattis elit et arcu ultrices sollicitudin. Duis at ligula dapibus, laoreet elit in, feugiat mi.</p>
        </div>
      </article>
    </section>
   )
  }
}

export default User;