import React from "react";
import "./App.css";
import "./build/tailwind.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Main from "./Components/Blog/Main";
import Post from "./Components/Blog/Post";
import SocialMedia from "./Components/SocialMedia";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialMedia/>
      <Router>
        <Route exact path="/">
          <Homepage />{" "}
        </Route>
        <Route exact path="/about">
          <About />{" "}
        </Route>
        <Route exact path="/blog">
          <Main/>
        </Route>
        <Route path="/post/:id" component={Post} />
          {/* <Post/>
        </Route> */}
      </Router>
    </div>
  );
}

export default App;
