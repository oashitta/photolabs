import React from "react";
import useApplicationData from "./hooks/useApplicationData";
import HomeRoute from "./routes/HomeRoute";
import photos from "./mocks/photos.json";
import topics from "./mocks/topics.json";
import "./App.scss";

// Note: Rendering a single component to build components in isolation

const App = (props) => {
  const {
    favPhotos,
    toggleFavorite,
    openModal,
    photoClickHandler,
    clickedPhoto,
    closeModal,
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
      />
    </div>
  );
};

export default App;
