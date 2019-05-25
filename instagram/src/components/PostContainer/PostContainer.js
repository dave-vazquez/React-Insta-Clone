import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import IconContainer from './IconContainer';

function PostContainer(props) {
  return (
    <div className="post-container">
      <div className="username-container">
        <img
          className="user-thumbnail"
          src={props.thumbnailUrl}
          alt={props.username}
        />
        <span className="username">{props.username}</span>
      </div>
      <div className="image-container">
        <img
          className="image-post"
          src={props.imageUrl}
          alt={`${props.username}'s post`}
        />
      </div>
      <IconContainer likes={props.likes} />
      <CommentSection comments={props.comments} />
    </div>
  );
}

/* 
  key={post.imageUrl}
  username={post.username}
  thumbnailUrl={post.thumbnailUrl}
  imageUrl={post.imageUrl}
  timestamp={post.timestamp}
  likes={post.likes}
  comments={post.comments}
*/

PostContainer.propTypes = {
  username: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.array
};

export default PostContainer;
