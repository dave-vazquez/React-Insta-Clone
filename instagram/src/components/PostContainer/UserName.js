import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";

const UserName = props => {
  return (
    <div className="username-container">
      <img
        className="user-thumbnail"
        src={props.thumbnailUrl}
        alt={props.username}
      />
      <span className="username">{props.username}</span>
    </div>
  );
};

UserName.propTypes = {
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string
};

export default UserName;
