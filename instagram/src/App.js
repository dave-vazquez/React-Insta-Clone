import React from "react";
import "./App.css";

import PostsPage from "./components/PostsPage/PostsPage";
import withAuthenticate from "./authentication/withAuthenticate";
import LoginPage from "./components/LoginPage/LoginPage";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

class App extends React.Component {
  render() {
    return <ComponentFromWithAuthenticate />;
  }
}

export default App;
