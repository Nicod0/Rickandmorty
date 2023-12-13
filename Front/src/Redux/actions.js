import axios from "axios";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const GET_FAVORITES = "GET_FAVORITES";

export const getFavorites = () => {
  return async function (dispatch) {
    const response = await axios("http://localhost:3001/rickandmorty/fav");
    dispatch({ type: GET_FAVORITES, payload: response.data });
  };
};

export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (orden) => {
  return { type: ORDER, payload: orden };
};
