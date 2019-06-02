import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Fuse from "fuse.js";

import PostContainer from "../PostContainer/PostContainer";
import Navigation from "../Navigation/Navigation";
import LogOutPopUp from "../LogOutPopUp/LogOutPopUp";

import posts from "../../posts.js";
import "./PostsPage.css";

class PostsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      showLogOutPopUp: false
    };

    this.fuse = new Fuse(posts, {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["username"]
    });
  }

  componentDidMount = () => {
    this.setState({ posts: posts });
  };

  filterPosts = username => {
    let filteredPosts = this.fuse.search(username);

    this.setState({
      posts: username === "" ? posts : filteredPosts
    });

    return filteredPosts.length > 0;
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
