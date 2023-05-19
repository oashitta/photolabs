import React from "react";

import PhotoList from "./components/PhotoList";
import TopicList from "./components/TopicList";
import TopNavigationBar from "./components/TopNavigationBar";
import HomeRoute from "./routes/HomeRoute";

import photos from "./mocks/photos.json";
import topics from "./mocks/topics.json";

import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} />
    </div>
  );
};

export default App;
