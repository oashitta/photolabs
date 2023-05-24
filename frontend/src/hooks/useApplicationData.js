import { useReducer, useEffect } from "react";
// takes props from App.jsx

// declaring the initial states of the cases
const initialState = {
  favPhotos: [],
  openModal: false,
  clickedPhoto: null,
  topic: undefined,
  photos: [],
  topics: [],
};

// declaring actions
export const ACTIONS = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
  CLICKED_PHOTO: "CLICKED_PHOTO",
  PHOTOS_BY_TOPIC: "PHOTOS_BY_TOPIC",
  SET_PHOTOS: "SET_PHOTOS",
  SET_TOPICS: "SET_TOPICS",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_TOPICS:
      return {
        ...state,
        topics: action.payload,
      };
    case ACTIONS.SET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      };
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

    case ACTIONS.PHOTOS_BY_TOPIC:
      return {
        ...state,
        topic: action.payload,
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

//Creating an effect to make a GET request to /api/photos and /api/topics using fetch and updating the photos and topics state with the response. No longer using hard coded data to render photos and topics.

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTOS, payload: [...data] });
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((res) => res.json())
      .then((data) => {
        // setTopics([...data]);
        dispatch({ type: ACTIONS.SET_TOPICS, payload: [...data] });
      });
  }, []);

  // toggling between like and unlike state.
  const toggleFavorite = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: { photoId } });
  };

  const openModal = (photoProps) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, photoProps });
  };

  // To close the modal
  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  // to open the modal
  const photoClickHandler = (photoProps) => {
    dispatch({ type: ACTIONS.CLICKED_PHOTO, photoProps });
    openModal(photoProps);
  };

  // to get photo collection by topic id.
  const getPhotosByTopic = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTOS, payload: [...data] });
      });
  };

  return {
    favPhotos: state.favPhotos,
    toggleFavorite,
    openModal: state.openModal,
    photoClickHandler,
    clickedPhoto: state.clickedPhoto,
    closeModal,
    getPhotosByTopic,
    photos: state.photos,
    topics: state.topics,
  };
};

export default useApplicationData;
