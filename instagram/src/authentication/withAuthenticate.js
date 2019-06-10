import React from "react";

const withAuthenticate = PostsPage => Login =>
  class extends React.Component {
    state = {
      loggedIn: false
    };

    logOut = () => {
      window.localStorage.removeItem("username");
      window.localStorage.removeItem("password");

      this.setState({
        loggedIn: false
      });
    };

    componentDidMount() {
      if (window.localStorage.getItem("username")) {
        this.setState({ loggedIn: true });
      }
    }

    render() {
      return this.state.loggedIn ? (
        <PostsPage logOut={this.logOut} />
      ) : (
        <Login />
      );
    }
  };

export default withAuthenticate;
