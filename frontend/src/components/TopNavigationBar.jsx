import React from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

import "../styles/TopNavigationBar.scss";

const TopNavigation = (props) => {
  const { hasFavoritedPhoto, topics, getPhotosByTopic, photos } = props;

  const refreshPage = function () {
    window.location.reload();
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo" onClick={refreshPage}>
        PhotoLabs
      </span>

      <TopicList topics={topics} getPhotosByTopic={getPhotosByTopic} />
      <FavBadge isFavPhotoExist={hasFavoritedPhoto} />
    </div>
  );
};

export default TopNavigation;
