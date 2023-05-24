import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, onPhotoClick, toggleFavorite, favPhotos } = props;

  const photoItems = photos.map((photo, index) => {
    return (
      <PhotoListItem
        key={`${photo.id}_${index}`}
        photo={photo}
        username={photo.user.username}
        profile={photo.user.profile}
        imageSource={photo.urls.regular}
        hideUsername={photo.hideUsername}
        city={photo.location.city}
        country={photo.location.country}
        toggleFavorite={toggleFavorite}
        favorited={favPhotos.includes(photo.id)}
        id={photo.id}
        description={photo.description}
        onPhotoClick={onPhotoClick} // Pass the clicked photo to the onPhotoClick function. when i pass the photo, the modal opens and doesnt close.
      />
    );
  });

  return (
    <div>
      <ul className="photo-list">{photoItems}</ul>
    </div>
  );
};

export default PhotoList;
