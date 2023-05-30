import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favorite";

const store = configureStore({
  reducer: {
    favoriteMeals: favoriteReducer,
  },
});

export default store;
