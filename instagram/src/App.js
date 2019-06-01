import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from "./authentication/withAuthenticate";
import LoginPage from "./components/Login/LoginPage";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

class App extends React.Component {
  render() {
    return (
      <Router>
        <ComponentFromWithAuthenticate />
        <Route exact path="/" />
      </Router>
    );
  }
}

export default App;
