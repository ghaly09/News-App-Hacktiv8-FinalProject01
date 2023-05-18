"use client";

import { createSlice } from "@reduxjs/toolkit";

const favoriteStore = {
  favorites: {},
};

export const favoriteReducer = createSlice({
  name: "favorite",
  initialState: favoriteStore,
  reducers: {
    UPDATE_FAVORITE: (state, action) => {
      let id = action.payload.id;
      action.payload.saved = `fas fa-heart text-red-500`;
      state.favorites[id] = action.payload;
    },
    REMOVE_FAVORITE: (state, action) => {
      let id = action.payload.id;
      delete state.favorites[id];
    },
  },
});

export const { UPDATE_FAVORITE, REMOVE_FAVORITE } = favoriteReducer.actions;

export default favoriteReducer.reducer;
