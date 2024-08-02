// store.js
import { createStore } from "redux";

// Action types
const TOGGLE_THEME = "TOGGLE_THEME";

// Actions
export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

// Initial state
const initialState = {
  isDarkTheme: false, // false для светлой темы, true для темной
};

// Reducer
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(themeReducer);

export default store;
