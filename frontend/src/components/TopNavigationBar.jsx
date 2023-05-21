import React from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

import "../styles/TopNavigationBar.scss";

const TopNavigation = (props) => {
  const { hasFavoritedPhoto } = props;

  // console.log("this is topics:", props.topics);
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>

      <TopicList topics={props.topics} />
      <FavBadge isFavPhotoExist={hasFavoritedPhoto} />
    </div>
  );
};

export default TopNavigation;
