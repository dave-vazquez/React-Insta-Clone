import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./PostsPage.css";
import PostContainer from "../PostContainer/PostContainer";
import posts from "../../posts.js";
import Navigation from "../Navigation/Navigation";
import LogOutPopUp from "../LogOutPopUp/LogOutPopUp";

class PostsPage extends React.Component {
  state = {
    posts: [],
    showLogOutPopUp: false
  };

  componentDidMount = () => {
    this.setState({ posts: posts });
  };

  filterPosts = username => {
    let filteredPosts = posts.filter(post => post.username === username);

    this.setState({
      posts: username === "" ? posts : filteredPosts
    });

    return filteredPosts.length > 0;
  };

  resetPosts = () => {
    this.setState({ posts: posts });
  };

  showLogOutPopUp = show => {
    this.setState({
      showLogOutPopUp: show
    });
  };

  render() {
    return (
      <Router>
        <div className="posts-page-container">
          {this.state.showLogOutPopUp && (
            <LogOutPopUp
              showLogOutPopUp={this.showLogOutPopUp}
              logOut={this.props.logOut}
            />
          )}
          <Navigation
            filterPosts={this.filterPosts}
            resetPosts={this.resetPosts}
            showLogOutPopUp={this.showLogOutPopUp}
          />
          <div className="main-content">
            <div style={{ height: "80px" }} />
            {this.state.posts.map((post, i) => (
              <PostContainer
                key={i}
                username={post.username}
                thumbnailUrl={post.thumbnailUrl}
                imageUrl={post.imageUrl}
                timestamp={post.timestamp}
                likes={post.likes}
                comments={post.comments}
              />
            ))}
          </div>
        </div>
        <Route exact path="/" />
      </Router>
    );
  }
}

export default PostsPage;
