import './App.scss';
import { Component } from 'react'
import User from '../User/User'
import Form from '../Form/Form'
import { NavBar } from '../NavBar/NavBar'
import { Switch, Route, Link, Router } from "react-router-dom"
import { getRandomJoke } from '../ApiCalls.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      joke: '',
      id: '',
      error: '',
      displayHomeButton: false
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
          <main>
            <nav>
              <NavBar />
            </nav>
            <Switch>
              <Route
                exact
                path='/'
                render={ () => {
                  return (
                    <section className="app-body">
                      <p className="joke-card">{this.state.joke}</p>
                      <div className="joke-btns">
                        <button className="add-favorite">Favorite</button>
                        <button className="next-joke" onClick={this.loadNewJoke}>Next</button>
                      </div>
                    </section>
                  )
                }}
              >
              </Route>
              <Route
                exact
                path='/user-view'
                render={ () => {
                  return(
                    <User />
                  )
                }}
              >
              </Route>
              <Route
                exact
                path='/form-view'
                render={ () => {
                  return(
                    <Form />
                  )
                }}
              >
              </Route>
            </Switch>
          </main>
        </div>
    );
  }
}

export default App;
