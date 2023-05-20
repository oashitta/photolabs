import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    username,
    imageSource,
    id,
    hideUserName,
    addFavPhoto,
    removeFavPhoto,
  } = props;

  const [isFavorited, setIsFavorited] = useState(false);

  const onFavorited = (favorited) => {
    setIsFavorited(favorited);
  };

  if (isFavorited === true) {
    addFavPhoto(id);
  } else {
    removeFavPhoto(id);
  }

  return (
    <div className="photo-list--item">
      <PhotoFavButton onFavorited={onFavorited} />
      <img
        src={imageSource}
        alt={`Photo by ${username}`}
        className="photo-list--image"
      />
      {!hideUserName && <p>{username}</p>}
    </div>
  );
};

// PhotoListItem.defaultProps = {
//   username: "Jacob",
//   imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//   id: 1,
//   hideUserName: false,
// };

export default PhotoListItem;
