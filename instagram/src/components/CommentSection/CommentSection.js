import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import "./CommentSection.css";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }

  componentDidMount = () => {
    this.setState({ comments: this.props.comments });
  };

  render() {
    return (
      <div className="comment-section">
        {this.props.comments.map(comment => (
          <Comment
            key={`${comment.username}${comment.text}`} // joined two props to form a unique key
            comment={comment}
          />
        ))}
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.array
};

export default CommentSection;
