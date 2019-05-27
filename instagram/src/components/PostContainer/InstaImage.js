import React from "react";
import PropTypes from "prop-types";
import "./InstaImage.css";

class InstaImage extends React.Component {
  render() {
    return (
      <div className="image-container">
        <img
          className="image-post"
          src={this.props.imageUrl}
          alt={`${this.props.username}'s post`}
        />
      </div>
    );
  }
}

InstaImage.propTypes = {
  imageURL: PropTypes.string,
  username: PropTypes.string
};

export default InstaImage;
