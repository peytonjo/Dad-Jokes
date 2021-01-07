import './App.scss';
import { Component } from 'react'
import userIcon from '../user.png'
import User from '../User/User'
import Form from '../Form/Form'
import { NavBar } from '../NavBar/NavBar'
import { Link, Router } from "react-router-dom"
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
      //<Router>
        <div className="App">
          <body>
            <NavBar />
            <section className="app-body">
              <p className="joke-card">{this.state.joke}</p>
              <div className="joke-btns">
                <button className="add-favorite">Favorite</button>
                <button className="next-joke" onClick={this.loadNewJoke}>Next</button>
              </div>
            </section>
            {/* <User />  */}
            {/* <Form /> */}
          </body>
        </div>
      //</Router>
    );
  }
}

export default App;
