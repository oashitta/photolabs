import React, { useState } from "react";

import PhotoList from "./components/PhotoList";
import TopicList from "./components/TopicList";
import TopNavigationBar from "./components/TopNavigationBar";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

import photos from "./mocks/photos.json";
import topics from "./mocks/topics.json";

import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [clickedPhoto, setClickedPhoto] = useState(null);

  const photoClickHandler = (photo) => {
    setClickedPhoto(photo);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setClickedPhoto(null);
  };
  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        onPhotoClick={photoClickHandler}
      />
      {openModal && (
        <PhotoDetailsModal photo={clickedPhoto} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
