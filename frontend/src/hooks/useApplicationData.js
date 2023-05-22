import { useState, useReducer } from "react";
// takes props from App.jsx

export const ACTIONS = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
  ADD_FAV_PHOTO: "ADD_FAV_PHOTO",
  CLICKED_PHOTO: "CLICKED_PHOTO",
};

function reducer(state, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, openModal: true, clickedPhoto: action.photoProps };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
const useApplicationData = () => {
  // state to keep track of the details of the photos favorited.
  const [favPhotos, setFavPhotos] = useState([]);
  // manages modals active state
  const [openModal, setOpenModal] = useState(false);
  // manages photo data that will be passed to modal
  const [clickedPhoto, setClickedPhoto] = useState(null);

  const toggleFavorite = (photoId) => {
    if (favPhotos.includes(photoId)) {
      setFavPhotos(favPhotos.filter((id) => id !== photoId));
    } else {
      setFavPhotos((prev) => [...prev, photoId]);
    }
  };

  // to open the modal
  const photoClickHandler = (photoProps) => {
    setClickedPhoto(photoProps);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setClickedPhoto(null);
  };

  return {
    favPhotos,
    toggleFavorite,
    openModal,
    photoClickHandler,
    clickedPhoto,
    closeModal,
  };
};

export default useApplicationData;
