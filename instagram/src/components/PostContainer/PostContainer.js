import React from "react";
import PropTypes from "prop-types";

import CommentSection from "../CommentSection/CommentSection";
import IconContainer from "./IconContainer";
import UserName from "./UserName";
import InstaImage from "./InstaImage";
import TimeStamp from "./TimeStamp";
import CommentForm from "./CommentForm";

import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className="post-container">
      <UserName thumbnailUrl={props.thumbnailUrl} username={props.username} />
      <InstaImage
        imageUrl={props.imageUrl}
        username={`${props.username}'s post`}
      />
      <section className="comment-section-container">
        <IconContainer likes={props.likes} />
        <CommentSection comments={props.comments} />
        <TimeStamp />
        <CommentForm />
      </section>
    </div>
  );
};

PostContainer.propTypes = {
  username: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.array
};

export default PostContainer;
