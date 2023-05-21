import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const topicItems = props.topics.map((topic, index) => {
    return (
      <TopicListItem
        key={`${topic.id}_${index}`}
        label={topic.title}
        link={topic.link}
        className="topic-list--item"
      />
    );
  });
  return <div className="top-nav-bar--topic-list">{topicItems}</div>;
};

export default TopicList;
