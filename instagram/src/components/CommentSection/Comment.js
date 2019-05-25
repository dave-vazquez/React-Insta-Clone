import React from 'react';
import './CommentSection.css';

class Comment extends React.Component {
  render() {
    return (
      <p className="comment">
        <span className="comment-username">{this.props.userName}</span>
        {this.props.text}
      </p>
    );
  }
}

export default Comment;
