import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import PhotoDetailsModal from "./PhotoDetailsModal";
import PhotoFavButton from "../components/PhotoFavButton";

// takes props from App.jsx
const HomeRoute = (props) => {
  const { topics, photos } = props;
  // console.log("This is photos:", photos);

  // state to keep track of the details of the photos favorited.
  const [favPhotos, setFavPhotos] = useState([]);

  // goal of this is to call has setfavphoto to true on click
  // if favePhotos does not include the id. add it.
  const addFavPhoto = (photoId) => {
    if (!favPhotos.includes(photoId)) {
      setFavPhotos((prev) => [...prev, photoId]);
    }
  };

  // if favePhotos includes the id, remove it.
  const removeFavPhoto = (photoId) => {
    if (favPhotos.includes(photoId)) {
      setFavPhotos(favPhotos.filter((id) => id !== photoId));
    }
  };

  const toggleFavorite = (photoId) => {
    if (favPhotos.includes(photoId)) {
      setFavPhotos(favPhotos.filter((id) => id !== photoId));
    } else {
      setFavPhotos((prev) => [...prev, photoId]);
    }
  };

  // console.log("has favorited photo", hasFavoritedPhoto);
  // console.log("has favorited photo", favPhotos);

  // manages modals active state
  const [openModal, setOpenModal] = useState(false);
  // manages photodate that will bw passed to modal
  const [clickedPhoto, setClickedPhoto] = useState(null);

  // console.log("apps photos:", photos);

  const photoClickHandler = (photoProps) => {
    setClickedPhoto(photoProps);
    setOpenModal(true);
    // console.log("handler photo:", photo);
  };

  const closeModal = () => {
    setOpenModal(false);
    setClickedPhoto(null);
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} hasFavoritedPhoto={favPhotos.length} />
      <PhotoList
        photos={photos}
        onPhotoClick={photoClickHandler}
        toggleFavorite={toggleFavorite}
        favPhotos={favPhotos}
      />
      {openModal && (
        <PhotoDetailsModal
          photos={photos} //passing the list of all photos to the modal
          photo={clickedPhoto}
          onClose={closeModal}
          toggleFavorite={toggleFavorite}
          favorited={favPhotos.includes(clickedPhoto.id)}
          favPhotos={favPhotos}
        />
      )}
    </div>
  );
};

export default HomeRoute;
