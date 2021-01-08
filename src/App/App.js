import './App.scss';
import { Component } from 'react'
import User from '../User/User'
import Form from '../Form/Form'
import RandomJoke from '../RandomJoke/RandomJoke'
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

  homeButtonDisplayUpdater = (bool) => {
    this.setState({ displayHomeButton: bool })
  }

  render() {
    this.loadJoke()
    return (
        <div className="App">
          <main>
            <nav>
              <NavBar displayHomeButton={this.state.displayHomeButton}/>
            </nav>
            <Switch>
              <Route
                exact
                path='/'
                render={ () => {
                  return(
                    <RandomJoke joke={this.state.joke} loadNewJoke={this.loadNewJoke} homeButtonDisplayUpdater={this.homeButtonDisplayUpdater}/>
                  )
                }}
              >
              </Route>
              <Route
                exact
                path='/user-view'
                render={ () => {
                  return(
                    <User homeButtonDisplayUpdater={this.homeButtonDisplayUpdater}/>
                  )
                }}
              >
              </Route>
              <Route
                exact
                path='/form-view'
                render={ () => {
                  return(
                    <Form homeButtonDisplayUpdater={this.homeButtonDisplayUpdater}/>
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
