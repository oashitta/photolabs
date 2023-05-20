import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

// takes props from App.jsx
const HomeRoute = (props) => {
  const { topics, photos } = props;

  // state to keep track of the details of the photos favorited.
  // const [hasFavoritedPhoto, setHasFavoritedPhoto] = useState(false);
  const [favPhotos, setFavPhotos] = useState([]);

  // goal of this is to call has setfav to true on click
  // const onFavoritedPhoto = function () {
  //   console.log("favorited was clicked");
  //   setHasFavoritedPhoto(true);
  // };

  //current state of favorite photos
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

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} hasFavoritedPhoto={favPhotos.length} />
      <PhotoList
        photos={photos}
        addFavPhoto={addFavPhoto}
        removeFavPhoto={removeFavPhoto}
      />
    </div>
  );
};

export default HomeRoute;
