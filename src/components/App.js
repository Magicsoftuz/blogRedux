import React from "react";
import PostList from "./PostList";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <Header />
      <PostList />
    </div>
  );
};

export default App;
