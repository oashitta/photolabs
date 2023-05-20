import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

// {props.photos.map((photo) => (
//   <PhotoListItem key={photo.id} />
// ))}
const PhotoList = (props) => {
  // console.log("this is props.photos:", props.photos);
  const { photos, addFavPhoto, removeFavPhoto } = props;

  const photoItems = photos.map((photo, index) => {
    // const isFavorite = favPhotos.includes(photo.id);

    return (
      <PhotoListItem
        key={`${photo.id}_${index}`}
        username={photo.user.username}
        imageSource={photo.urls.regular}
        hideUsername={photo.hideUsername}
        addFavPhoto={addFavPhoto}
        removeFavPhoto={removeFavPhoto}
        id={photo.id}
      />
    );
  });
  return <ul className="photo-list">{photoItems}</ul>;
};

// PhotoList.defaultProps = {
//   photos: [
//     {
//       username: "Jacob",
//       imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//       id: 1,
//       hideUserName: false,
//     },
//     {
//       username: "Jacob",
//       imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//       id: 2,
//       hideUserName: false,
//     },
//     {
//       username: "Jacob",
//       imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//       id: 3,
//       hideUserName: false,
//     },
//   ],
// };

export default PhotoList;
