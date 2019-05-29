import React from "react";
import "./CommentForm.css";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ""
    };

    this.whiteSpaceRegex = /\S/;
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = event => {
    event.preventDefault();

    if (!this.commentIsEmpty()) {
      this.props.addNewComment(this.state.comment);

      this.setState({
        comment: ""
      });
    }
  };

  commentIsEmpty = () => {
    return !this.whiteSpaceRegex.test(this.state.comment);
  };

  render() {
    return (
      <form className="comment-form" onSubmit={this.onSubmitHandler}>
        <input
          className="comment-input"
          name="comment"
          placeholder="Add Comment..."
          value={this.state.comment}
          onChange={this.onChangeHandler}
        />
        <button
          className={`post-button ${!this.commentIsEmpty() ? "dark-blue" : ""}`}
          onSubmit={this.onSubmitHandler}
          disabled={this.commentIsEmpty()}
        >
          Post
        </button>
      </form>
    );
  }
}

export default CommentForm;
