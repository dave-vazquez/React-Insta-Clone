import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import TimeStamp from "./TimeStamp";
import CommentForm from "./CommentForm";

import posts from "../../posts.js";
import "./css/CommentSection.css";

console.log(posts[0].comments);

class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };

    this.LS_key = `comments_${this.props.postID}`;
  }

  addNewComment = comment => {
    this.setState(
      {
        comments: [
          ...this.state.comments,
          {
            username: JSON.parse(window.localStorage.getItem("username")),
            text: comment
          }
        ]
      },
      () => {
        let newComment = this.state.comments[this.state.comments.length - 1];
        this.localStorageEmpty()
          ? this.initializeLocalStorageWith(newComment)
          : this.addNewCommentToLocalStorage(newComment);
      }
    );
  };

  initializeLocalStorageWith = newComment => {
    localStorage.setItem(this.LS_key, JSON.stringify([newComment]));
  };

  addNewCommentToLocalStorage = newComment => {
    let commentsFromLS = JSON.parse(localStorage.getItem(this.LS_key));

    commentsFromLS.push(newComment);

    localStorage.setItem(this.LS_key, JSON.stringify(commentsFromLS));
  };

  componentDidMount = () => {
    let commentsFromLS = JSON.parse(localStorage.getItem(this.LS_key));

    this.setState({
      comments: localStorage.getItem(this.LS_key) // null === false
        ? [...this.props.comments, ...commentsFromLS]
        : this.props.comments
    });
  };

  commentsFromLS = () => {
    return JSON.parse(localStorage.getItem(this.LS_key));
  };

  localStorageEmpty = () => {
    return !localStorage.getItem(this.LS_key);
  };

  render() {
    return (
      <div className="comment-section">
        {this.state.comments.map((comment, i) => (
          <Comment key={i} comment={comment} />
        ))}
        <TimeStamp />
        <CommentForm addNewComment={this.addNewComment} />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.array
};

export default CommentSection;
