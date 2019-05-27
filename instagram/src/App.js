import React from "react";
import "./App.css";
import PostContainer from "./components/PostContainer/PostContainer";
import posts from "./dummy-data";
import Navigation from "./components/Navigation/Navigation";

class App extends React.Component {
  state = {
    posts: []
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

  render() {
    return (
      <div className="app-container">
        <Navigation
          filterPosts={this.filterPosts}
          resetPosts={this.resetPosts}
        />
        <div className="main-content">
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
    );
  }
}

export default App;
