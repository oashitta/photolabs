import React, { useState, useEffect } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    username,
    imageSource,
    description,
    id,
    profile,
    hideUsername,
    toggleFavorite,
    favorited,
    onPhotoClick,
    city,
    country,
  } = props;

  return (
    <div className="photo-list--item">
      <PhotoFavButton
        filled={favorited}
        toggleFavorite={() => toggleFavorite(id)}
      />
      <img
        src={imageSource}
        alt={description}
        className="photo-list--image"
        onClick={() => onPhotoClick(props)}
      />
      <div className="photo-list-details--parent">
        <img
          src={profile}
          className="photo-list--user-profile"
          alt="user-photo"
        />
        <div>
          <p className="photo-list--user-info"> {username} </p>
          <p className="photo-list--user-location ">
            {city}, {country}
          </p>
        </div>
      </div>
      {/* {!hideUsername && <p className="photo-list--user-info">{username}</p>} */}
    </div>
  );
};

export default PhotoListItem;
