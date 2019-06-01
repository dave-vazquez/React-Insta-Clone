import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment/Comment";
import TimeStamp from "./TimeStamp/TimeStamp";
import CommentForm from "./CommentForm/CommentForm";
import "./CommentSection.css";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }

  addNewComment = comment => {
    this.setState({
      comments: [
        ...this.state.comments,
        {
          username: JSON.parse(window.localStorage.getItem("username")),
          text: comment
        }
      ]
    });
  };

  componentDidMount = () => {
    this.setState({ comments: this.props.comments });
  };

  render() {
    return (
      <div className="comment-section">
        {this.state.comments.map(comment => (
          <Comment
            key={`${comment.username}${comment.text}`} // joined two props to form a unique key
            comment={comment}
          />
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
