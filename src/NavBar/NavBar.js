import userIcon from '../user.png'
import './NavBar.scss';

const NavBar = () => {
  return(
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
  )
}

export { NavBar }