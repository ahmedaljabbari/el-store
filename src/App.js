import "./App.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Ljud from "./pages/Ljud";
import Bild from "./pages/Bild";
import Datorer from "./pages/Datorer";

function App() {
  return (
    <Router>
      <div id="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Electronics
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/datorer">
                    Datorer
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ljud">
                    Ljud
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/bild">
                    TV/Bild
                  </Link>
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

        <Route path="/" component={Home} exact></Route>
        <Route path="/datorer" component={Datorer}></Route>
        <Route path="/ljud" component={Ljud}></Route>
        <Route path="/bild" component={Bild}></Route>


      </div>
    </Router>
  );
}

export default App;
