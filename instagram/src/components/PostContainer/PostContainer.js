import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import IconContainer from "./IconContainer";
import UserName from "./UserName";
import InstaImage from "./InstaImage";
import TimeStamp from "./TimeStamp";
import CommentForm from "./CommentForm";

import "./PostContainer.css";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: this.props.comments
    };
  }

  addNewComment = comment => {
    console.log(comment);
    this.setState({
      comments: [
        ...this.state.comments,
        {
          username: "dave-vazquez",
          text: comment
        }
      ]
    });
  };

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
          <CommentSection comments={this.state.comments} />
          <TimeStamp />
          <CommentForm addNewComment={this.addNewComment} />
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
