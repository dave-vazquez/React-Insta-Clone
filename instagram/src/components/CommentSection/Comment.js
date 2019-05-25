import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

class Comment extends React.Component {
  render() {
    return (
      <p className="comment">
        <span className="comment-username">{this.props.comment.username}</span>
        {this.props.comment.text}
      </p>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.shape({
    userName: PropTypes.string,
    text: PropTypes.string
  })
};

export default Comment;
