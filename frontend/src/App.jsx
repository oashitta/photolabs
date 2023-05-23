import React, { useState, useEffect } from "react";
import useApplicationData from "./hooks/useApplicationData";
import HomeRoute from "./routes/HomeRoute";
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

  // photo and topics data now come from the appplication and the state is being tracked using the useStateHook.
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  //Creating an effect to make a GET request to /api/photos and /api/topics using fetch and updating the photos and topics state with the response. No longer using hard coded data to render photos and topics.
  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((res) => res.json())
      .then((data) => {
        setPhotos([...data]);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((res) => res.json())
      .then((data) => {
        setTopics([...data]);
      });
  }, []);

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
