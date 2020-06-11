import React, { useState, useEffect } from "react";
import "./App.css";
import "./build/tailwind.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Main from "./Components/Blog/Main";
import Post from "./Components/Blog/Post";
import SocialMedia from "./Components/SocialMedia";
import Loading from "./Components/Loading";

axios.defaults.baseURL =
  "https://us-central1-hypedigi-app.cloudfunctions.net/app";

function App() {
  const [loading, setLoading] = useState("true");

  useEffect(() => {
    setLoading("false");
  }, []);

  if (loading == "true") {
    return (
      <div className="App">
        <Loading />
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <SocialMedia />
        <Router>
          <Route exact path="/">
            <Homepage />{" "}
          </Route>
          <Route exact path="/about">
            <About />{" "}
          </Route>
          <Route exact path="/blog">
            <Main />
          </Route>
          <Route path="/post/:id" component={Post} />
          {/* <Post/>
        </Route> */}
        </Router>
      </div>
    );
  }
}

export default App;
