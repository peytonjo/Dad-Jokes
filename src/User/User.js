import React from 'react'
import { Component } from 'react'
import './User.scss'


class User extends Component {
 constructor() {
   super();
 }

  render() {
   return (
    <section className="user-view">
      <article className="user-favs">
        <h1>Favorite Jokes</h1>
        <div className="joke-card">
          <p className="joke">"I don't trust stairs. They're always up to something."</p>
        </div>
      </article>
      <article className="users-jokes">
        <h1>Your Jokes</h1>
        <div className="joke-card">
          <p className="joke">"I don't trust stairs. They're always up to something."</p>
        </div>
      </article>
    </section>
   )
  }
}

export default User;