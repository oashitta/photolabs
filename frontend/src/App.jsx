import React from "react";
import useApplicationData from "./hooks/useApplicationData";
import HomeRoute from "./routes/HomeRoute";
import "./App.scss";

// Note: Rendering a single component to build components in isolation

// importing props from useApplicationData
const App = (props) => {
  const {
    favPhotos,
    toggleFavorite,
    openModal,
    photoClickHandler,
    clickedPhoto,
    closeModal,
    getPhotosByTopic,
    photos,
    topics,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        favPhotos={favPhotos}
        onClose={closeModal}
        toggleFavorite={toggleFavorite}
        openModal={openModal}
        clickedPhoto={clickedPhoto}
        onPhotoClick={photoClickHandler}
        getPhotosByTopic={getPhotosByTopic}
      />
    </div>
  );
};

export default App;
