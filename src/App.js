import { BrowserRouter } from "react-router-dom";
import './App.css';


function App() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <span className="nav-link">Instruments</span>
          </li>
          <li className="nav-item">
            <span className="nav-link">New Instruments</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default App;
