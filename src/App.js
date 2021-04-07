import { BrowserRouter, NavLink, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import { InstrumentListPage } from "./InstrumentListPage";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={'/'} activeClassName="active" exact>
                <span className="nav-link">Instruments</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/new-instrument'} activeClassName="active">
                <span className="nav-link">New Instrument</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route path="/" exact component={ InstrumentListPage } />

        <Route path="/instrument/:instrumentId">
          Instrument subpage
        </Route>
        <Route path="/new-instrument">
          New Instrument add
        </Route>
        <Redirect to={"/"} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
