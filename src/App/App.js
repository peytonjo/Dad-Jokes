import './App.scss';
import userIcon from '../user.png'
import User from '../User/User'
import Form from '../Form/Form'
import { Link, Router } from "react-router-dom"

function App() {
  return (
    //<Router>
      <div className="App">
        <body>
          <nav className="nav-bar">
            <div className="title-phrase">
              <h1 className="page-title">Cringy Dad Jokes</h1>
              <h4>Need a good joke to embarrass your kids? We've got you covered!</h4>
            </div>
            <section className="nav-btns">
            {/* <Link to="/User"> */}
              <button alt="button">
                <img
                className="user-icon"
                alt="user icon"
                src={ userIcon }
                role="button"
                />
              </button>
            {/* </Link> */}
            {/* <Link to="/Form"> */}
              <button alt="new joke button">Add new joke</button>
            {/* </ Link> */}
            </section>
          </nav>
          {/* <section className="app-body">
            <p className="joke-card">This is a joke.</p>
            <div className="joke-btns">
              <button className="add-favorite">Favorite</button>
              <button className="next-joke">Next</button>
            </div>
          </section> */}
          {/* <User />  */}
          {/* <Form /> */}
        </body>
      </div>
    //</Router>
  );
}

export default App;
