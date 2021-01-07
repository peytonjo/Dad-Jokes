import './App.scss';
import { Component } from 'react'
import userIcon from '../user.png'
import User from '../User/User'
import Form from '../Form/Form'
import { NavBar } from '../NavBar/NavBar'
import { Route, Link, Router } from "react-router-dom"
import { getRandomJoke } from '../ApiCalls.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      joke: '',
      id: '',
      error: ''
    }
  }

  loadNewJoke = () => {
    getRandomJoke()
      .then(data => this.setState({ joke: data.joke }))
      .catch(data => this.setState({ error: data.status }))
  }

  loadJoke = () => {
    window.onload = () => {
      this.loadNewJoke()
    }
  }

  render() {
    this.loadJoke()
    return (
        <div className="App">
          <body>
            <Route
              path='/'
              render={ () => {
                return (
                  <section>
                    <NavBar />
                    <section className="app-body">
                      <p className="joke-card">{this.state.joke}</p>
                      <div className="joke-btns">
                      <button className="add-favorite">Favorite</button>
                      <button className="next-joke" onClick={this.loadNewJoke}>Next</button>
                      </div>
                    </section>
                  </section>
                )
              }}
            >
            </Route>
            {/* <User />  */}
            {/* <Form /> */}
          </body>
        </div>
    );
  }
}

export default App;
