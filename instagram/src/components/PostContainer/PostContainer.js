import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

class PostContainer extends React.Component {
  render() {
    return (
      <div className="post-container">
        <div className="username-container">
          <img
            className="user-thumbnail"
            src={this.props.thumbnailUrl}
            alt={this.props.username}
          />
          <span className="username">{this.props.username}</span>
        </div>
        <div className="image-container">
          <img
            className="image-post"
            src={this.props.imageUrl}
            alt={`${this.props.username}'s post`}
          />
        </div>
        <div className="icon-container">
          <i className="la la-heart-o">H</i>
          <i className="la la-comment">C</i>
          <span className="like-count">{this.props.likes}</span>
        </div>

        <CommentSection comments={this.props.comments} />
      </div>
    );
  }
}

export default PostContainer;
