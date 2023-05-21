import React, { useState, useEffect } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    username,
    imageSource,
    description,
    id,
    hideUsername,
    addFavPhoto,
    removeFavPhoto,
    onPhotoClick,
  } = props;

  const [isFavorited, setIsFavorited] = useState(false);

  const onFavorited = (favorited) => {
    setIsFavorited(favorited);
  };

  useEffect(() => {
    if (isFavorited) {
      addFavPhoto(id);
    } else {
      removeFavPhoto(id);
    }
  }, [isFavorited]);

  // if (isFavorited === true) {
  //   addFavPhoto(id);
  // } else {
  //   removeFavPhoto(id);
  // }

  return (
    <div className="photo-list--item">
      <PhotoFavButton onFavorited={onFavorited} />
      <img
        src={imageSource}
        alt={`Photo by ${username}`}
        className="photo-list--image"
        onClick={onPhotoClick}
      />
      {!hideUsername && <p>{username}</p>}
    </div>
  );
};

export default PhotoListItem;
