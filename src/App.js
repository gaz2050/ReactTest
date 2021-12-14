import "./App.css";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav>
            <ul id="navigation">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About.jsx">About...</Link>
              </li>
              <Routes>
                <Route path="/welcome" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;
