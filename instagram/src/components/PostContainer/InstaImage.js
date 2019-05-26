import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";

const InstaImage = props => {
  return (
    <div className="image-container">
      <img
        className="image-post"
        src={props.imageUrl}
        alt={`${props.username}'s post`}
      />
    </div>
  );
};

InstaImage.propTypes = {
  imageURL: PropTypes.string,
  username: PropTypes.string
};

export default InstaImage;
