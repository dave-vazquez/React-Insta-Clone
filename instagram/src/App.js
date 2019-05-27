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

  render() {
    return (
      <div className="app-container">
        <Navigation />
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
