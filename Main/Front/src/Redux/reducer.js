import { REMOVE_FAVORITE, FILTER, ORDER, GET_FAVORITES } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };
    case FILTER:
      const allCharactersFiltered = state.allCharacters.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites:
          action.payload === "allCharacter"
            ? [...state.allCharacters]
            : allCharactersFiltered,
      };

    case ORDER:
      const allCharacterscopy = [...state.allCharacters];
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? allCharacterscopy.sort((a, b) => a.id - b.id)
            : allCharacterscopy.sort((a, b) => b.id - a.id),
      };
    case GET_FAVORITES:
      return { ...state, myFavorites: action.payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
