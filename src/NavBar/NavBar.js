import userIcon from '../user.png'
import './NavBar.scss';
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
  return(
    <nav className="nav-bar">
      <div className="title-phrase">
        <h1 className="page-title">Cringy Dad Jokes</h1>
        <h4>Need a good joke to embarrass your kids? We've got you covered!</h4>
      </div>
      <section className="nav-btns">
      <NavLink to="/user-view">
        <button role="button">
          <img
          className="user-icon"
          alt="user icon"
          src={ userIcon }
          role="button"
          />
        </button>
      </NavLink>
      <NavLink to="/form-view">
        <button alt="new joke button">Add new joke</button>
      </ NavLink>
      {props.displayHomeButton &&
      <NavLink to="/">
        <button alt="home button">Return to Home</button>
      </NavLink>
      }
      </section>
    </nav>
  )
}

export { NavBar }