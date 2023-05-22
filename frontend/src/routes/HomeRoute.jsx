import React from "react";
import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import PhotoDetailsModal from "./PhotoDetailsModal";
import PhotoFavButton from "../components/PhotoFavButton";

// takes props from App.jsx
const HomeRoute = (props) => {
  const {
    topics,
    photos,
    favPhotos,
    onClose,
    toggleFavorite,
    openModal,
    clickedPhoto,
    onPhotoClick,
  } = props;

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} hasFavoritedPhoto={favPhotos.length} />
      <PhotoList
        photos={photos}
        // onPhotoClick={photoClickHandler}
        onPhotoClick={onPhotoClick}
        toggleFavorite={toggleFavorite}
        favPhotos={favPhotos}
      />
      {openModal && (
        <PhotoDetailsModal
          photos={photos} //passing the list of all photos to the modal
          photo={clickedPhoto}
          // onClose={closeModal}
          onClose={onClose}
          toggleFavorite={toggleFavorite}
          favorited={favPhotos.includes(clickedPhoto.id)}
          favPhotos={favPhotos}
        />
      )}
    </div>
  );
};

export default HomeRoute;
