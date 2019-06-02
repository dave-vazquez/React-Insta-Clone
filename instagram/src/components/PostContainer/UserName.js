import React from "react";
import PropTypes from "prop-types";
import "./css/UserName.css";

class UserName extends React.Component {
  render() {
    return (
      <div className="username-container">
        <img
          className="user-thumbnail"
          src={this.props.thumbnailUrl}
          alt={this.props.username}
        />
        <span className="username">{this.props.username}</span>
      </div>
    );
  }
}

UserName.propTypes = {
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string
};

export default UserName;
