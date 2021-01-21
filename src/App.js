import "./App.css";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Electronics
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Datorer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Bildskärm
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Mobiltelefon
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Surfplatta
                </a>
              </li>
              </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default App;
