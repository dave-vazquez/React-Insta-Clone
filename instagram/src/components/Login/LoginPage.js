import React from "react";
import instagram from "../../assets/instagram.png";

import "./LoginPage.css";

class LoginPage extends React.Component {
  state = {
    username: "",
    password: ""
  };

  login = e => {
    e.preventDefault();
    window.localStorage.setItem(
      "username",
      JSON.stringify(this.state.username)
    );
    window.localStorage.setItem(
      "password",
      JSON.stringify(this.state.password)
    );
    window.location.reload();
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="login-page">
        <div className="login-container">
          <img className="login-logo-text" src={instagram} alt="instagram" />
          <input
            className="username-input"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.onChangeHandler}
          />
          <input
            className="password-input"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChangeHandler}
          />
          <button className="login-button" onClick={this.login}>
            Log In
          </button>
        </div>
      </div>
    );
  }
}

export default LoginPage;
