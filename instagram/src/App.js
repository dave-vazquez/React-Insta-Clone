import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import posts from './dummy-data';

class App extends React.Component {
  state = {
    posts
  };

  render() {
    return (
      <div className="app-container">
        <SearchBar />
        {this.state.posts.map(post => (
          <PostContainer
            key={post.imageUrl}
            username={post.username}
            thumbnailUrl={post.thumbnailUrl}
            imageUrl={post.imageUrl}
            timestamp={post.timestamp}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </div>
    );
  }
}

export default App;
