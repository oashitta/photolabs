import React, { useCallback, useState } from "react";

import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  // declaring the states.
  const [filled, setFilled] = useState(false);

  const handleFavClick = () => {
    console.log("fav icon was clicked");
    // setting the value of filled to true on click of the FavIcon.
    // using (preFilled) => !preFilled helps to toggle between clicked state and unclicked state.
    setFilled((prevFilled) => !prevFilled);
  };

  return (
    // The parent div has the onlick handler and not the child FavIcon.
    <div className="photo-list--fav-icon" onClick={handleFavClick}>
      <div className="photo-list--fav-icon-svg">
        {/* the color of the icon changes based on the filled state. */}
        {/* the width of the outline changes based on the filled state. */}
        <FavIcon
          fill={filled === true ? "#C80000" : "#EEEEEE"}
          outlineWidth={filled === true ? 4 : 2}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;
