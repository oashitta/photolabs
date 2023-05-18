import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { username, imageSource, id, hideUserName } = props;

  return (
    <div className="photo-list--item">
      <PhotoFavButton />
      <img
        src={imageSource}
        alt={`Photo by ${username}`}
        className="photo-list--image"
      />
      {!hideUserName && (
        <p className="photo-list--user-profile photo-list--user-info">
          {username}
        </p>
      )}
    </div>
  );
};

PhotoListItem.defaultProps = {
  username: "Jacob",
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
};

export default PhotoListItem;
