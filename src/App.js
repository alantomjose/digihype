import React from "react";
import "./App.css";
import "./build/tailwind.css";
import "./css/Clientsnew.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import About from "./Components/About";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route exact path="/">
          <Homepage />{" "}
        </Route>
        <Route exact path="/about">
          <About />{" "}
        </Route>
      </Router>
    </div>
  );
}

export default App;
