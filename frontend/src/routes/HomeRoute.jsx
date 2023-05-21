import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

// takes props from App.jsx
const HomeRoute = (props) => {
  const { topics, photos, onPhotoClick } = props;

  // state to keep track of the details of the photos favorited.
  const [favPhotos, setFavPhotos] = useState([]);

  // goal of this is to call has setfavphoto to true on click
  // if favePhotos does not include the id. add it.
  const addFavPhoto = (photoId) => {
    // do I need to make a copy of the existing aray first?
    // setFavPhotos((prevFavPhotos) => {})
    if (!favPhotos.includes(photoId)) {
      setFavPhotos([...favPhotos, photoId]);
    }
  };

  // if favePhotos includes the id, remove it.
  const removeFavPhoto = (photoId) => {
    if (favPhotos.includes(photoId)) {
      setFavPhotos(favPhotos.filter((id) => id !== photoId));
    }
  };

  // console.log("has favorited photo", hasFavoritedPhoto);
  console.log("has favorited photo", favPhotos);

  // opening modal
  // const { selectedPhoto, setSelectedPhoto } = useState(null);

  // const openModal = (photo) => {
  //   setSelectedPhoto(photo);
  // };

  // const closeModal = () => {
  //   setSelectedPhoto(null);
  // };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} hasFavoritedPhoto={favPhotos.length} />
      <PhotoList
        photos={photos}
        addFavPhoto={addFavPhoto}
        removeFavPhoto={removeFavPhoto}
        onPhotoClick={onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
