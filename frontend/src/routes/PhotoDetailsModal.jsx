import React from "react";

import "../styles/PhotoDetailsModal.scss";
import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton";

export const PhotoDetailsModal = (props) => {
  const { onClose, photo, photos, toggleFavorite, favorited, favPhotos } =
    props;

  const { imageSource, description, username, id, city, country, profile } =
    photo;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal--close-button" onClick={onClose}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_428_287)">
            <path
              d="M14.0625 3.9375L3.9375 14.0625"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.0625 14.0625L3.9375 3.9375"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>

      <div className="photo-list--item center-modal-image">
        <PhotoFavButton
          filled={favorited}
          toggleFavorite={() => toggleFavorite(id)}
        />
        <img
          className="photo-details-modal--image"
          src={imageSource}
          alt={description}
        />
        <div className="photo-list-details--parent">
          <img
            src={profile}
            className="photo-list--user-profile"
            alt="user-photo"
          />
          <div>
            <h3>photo by {username}</h3>
            <p className="photo-list--user-location ">
              {city}, {country}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h4 className="photo-details-modal--header">Similar Photos</h4>
        <div className="photo-details-modal--images">
          <PhotoList
            photos={[photos[0], photos[1], photos[3], photos[4]]}
            toggleFavorite={toggleFavorite}
            favPhotos={favPhotos}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
