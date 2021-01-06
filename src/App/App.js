import './App.scss';

function App() {
  return (
    <div className="App">
      <body>
        <nav className="navBar">
          <h1 className="page-title">This is our application</h1>
          <section className="nav-btns">
            <button>user page</button>
            <button>create your own!</button>
          </section>
        </nav>
        <section className="app-body">
          <p>This is a joke.</p>
          <div className="joke-btns">
            <button>Favorite</button>
            <button>Next</button>
          
          </div>
        </section>
      </body>
    </div>
  );
}

export default App;
