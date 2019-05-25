import React from 'react';
import Comment from './Comment';
import './CommentSection.css';

class CommentSection extends React.Component {
  render() {
    return (
      <div className="comment-section-container">
        {this.props.comments.map(comment => (
          <Comment
            key={`${comment.username}${comment.text}`}
            userName={comment.username}
            text={comment.text}
          />
        ))}
      </div>
    );
  }
}

export default CommentSection;
