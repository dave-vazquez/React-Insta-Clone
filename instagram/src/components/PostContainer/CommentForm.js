import React from "react";
import "./PostContainer.css";

class CommentForm extends React.Component {
  state = {
    comment: ""
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form>
        <input
          className="comment-input"
          name="comment"
          placeholder="Add Comment..."
          value={this.state.comment}
          onChange={this.onChangeHandler}
        />
      </form>
    );
  }
}

export default CommentForm;
