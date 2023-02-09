import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./countSlice";
import { favReducer } from "./FavSlice";

export const store = configureStore({
  reducer: {
    countReducer,
    favReducer,
  },
});
