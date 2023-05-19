import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";
// import topics from "../mocks/topics.json";

const TopicList = (props) => {
  const topicItems = props.topics.map((topic) => {
    return (
      <TopicListItem
        key={topic.id}
        label={topic.title}
        link={topic.link}
        className="topic-list--item"
      />
    );
  });
  return <div className="top-nav-bar--topic-list">{topicItems}</div>;
};

// TopicList.defaultProps = {
//   topics: [
//     {
//       id: 1,
//       label: "Nature",
//       link: "link placeholder",
//     },
//     {
//       id: 2,
//       label: "Nature2",
//       link: "link placeholder",
//     },
//     {
//       id: 3,
//       label: "Nature3",
//       link: "link placeholder",
//     },
//   ],
// };
export default TopicList;
