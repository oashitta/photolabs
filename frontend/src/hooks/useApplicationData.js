import { useReducer } from "react";
// takes props from App.jsx

const initialState = {
  favPhotos: [],
  openModal: false,
  clickedPhoto: null,
};

export const ACTIONS = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
  CLICKED_PHOTO: "CLICKED_PHOTO",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.OPEN_MODAL:
      return { ...state, openModal: true, clickedPhoto: action.photoProps };

    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        openModal: false,
        clickedPhoto: null,
      };

    case ACTIONS.TOGGLE_FAVORITE:
      const { photoId } = action.payload;
      const isFavorited = state.favPhotos.includes(photoId);

      if (isFavorited) {
        return {
          ...state,
          favPhotos: state.favPhotos.filter((id) => id !== photoId),
        };
      } else {
        return {
          ...state,
          favPhotos: [...state.favPhotos, photoId],
        };
      }
    case ACTIONS.CLICKED_PHOTO:
      return {
        ...state,
        clickedPhoto: action.photoProps,
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavorite = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: { photoId } });
  };

  const openModal = (photoProps) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, photoProps });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };
  // to open the modal
  const photoClickHandler = (photoProps) => {
    dispatch({ type: ACTIONS.CLICKED_PHOTO, photoProps });
    openModal(photoProps);
  };

  return {
    favPhotos: state.favPhotos,
    toggleFavorite,
    openModal: state.openModal,
    photoClickHandler,
    clickedPhoto: state.clickedPhoto,
    closeModal,
  };
};

export default useApplicationData;
