import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';

function IconContainer(props) {
  return (
    <div className="icon-container">
      <i className="la la-heart-o">H</i>
      <i className="la la-comment">C</i>
      <span className="like-count">{props.likes}</span>
    </div>
  );
}

IconContainer.propTypes = {
  likes: PropTypes.number
};

export default IconContainer;
