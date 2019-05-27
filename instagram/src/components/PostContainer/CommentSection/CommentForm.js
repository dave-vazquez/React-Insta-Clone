import React from "react";
import "./CommentForm.css";

class CommentForm extends React.Component {
  state = {
    comment: ""
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    this.props.addNewComment(this.state.comment);

    this.setState({
      comment: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input
          className="comment-input"
          name="comment"
          placeholder="Add Comment..."
          value={this.state.comment}
          onChange={this.onChangeHandler}
        />
        {/* <button onSubmit={this.onSubmitHandler}>Add</button> */}
      </form>
    );
  }
}

export default CommentForm;
