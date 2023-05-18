import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((photo) => (
        <PhotoListItem key={photo.id} />
      ))}
    </ul>
  );
};

PhotoList.defaultProps = {
  photos: [
    {
      username: "Jacob",
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 1,
      hideUserName: false,
    },
    {
      username: "Jacob",
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 2,
      hideUserName: false,
    },
    {
      username: "Jacob",
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 3,
      hideUserName: false,
    },
  ],
};

export default PhotoList;
