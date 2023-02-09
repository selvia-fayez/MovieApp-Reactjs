import { createSlice } from "@reduxjs/toolkit";

const FavSlice = createSlice({
  name: "fav",
  initialState: { fav: [] },
  reducers: {
    AddToFavourite(state, action) {
      state.fav.push(action.payload);
    },
    RemoveFromFavouite(state, action) {
      state.fav = state.fav.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const { AddToFavourite, RemoveFromFavouite } = FavSlice.actions;
export const favReducer = FavSlice.reducer;
