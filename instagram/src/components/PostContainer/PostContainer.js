import React from "react";
import PropTypes from "prop-types";
import UserName from "./UserName";
import InstaImage from "./InstaImage";
import IconContainer from "./IconContainer";
import CommentSection from "../CommentSection/CommentSection";

import "./css/PostContainer.css";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: this.props.comments
    };
  }

  render() {
    return (
      <div className="post-container">
        <UserName
          thumbnailUrl={this.props.thumbnailUrl}
          username={this.props.username}
        />
        <InstaImage
          imageUrl={this.props.imageUrl}
          username={`${this.props.username}'s post`}
        />
        <section className="comment-section-container">
          <IconContainer likes={this.props.likes} />
          <CommentSection
            postID={this.props.postID}
            comments={this.state.comments}
            addNewComment={this.addNewComment}
          />
        </section>
      </div>
    );
  }
}

PostContainer.propTypes = {
  username: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.array
};

export default PostContainer;
