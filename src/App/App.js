import './App.scss';
import userIcon from '../user.png'
import User from '../User/User'
import Form from '../Form/Form'

function App() {
  return (
    <div className="App">
      <body>
        <nav className="nav-bar">
          <div className="title-phrase">
            <h1 className="page-title">Cringy Dad Jokes</h1>
            <h4>Need a good joke to embarrass your kids? We've got you covered!</h4>
          </div>
          <section className="nav-btns">
            <button>
              <img
              className="user-icon"
              alt="user image"
              src={ userIcon }
              role="button"
              />
            </button>
            <button>Add new joke</button>
          </section>
        </nav>
        {/* <section className="app-body">
          <p>This is a joke.</p>
          <div className="joke-btns">
            <button>Favorite</button>
            <button>Next</button>
          </div>
        </section> */}
        {/* <User />  */}
        <Form />
      </body>
    </div>
  );
}

export default App;
