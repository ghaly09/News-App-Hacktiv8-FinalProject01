"use client";

import { createSlice } from "@reduxjs/toolkit";

const favoriteStore = {
  favorites: [],
};

export const favoriteReducer = createSlice({
  name: "favorite",
  initialState: favoriteStore,
  reducers: {
    UPDATE_FAVORITE: (state, action) => {
      state.favorites.includes(action.payload)
        ? true
        : state.favorites.push(action.payload);
      // const iterator = state.favorites.values();
      // for (const value of iterator) {
      //   if (value != action.payload) {
      //     state.favorites.push(action.payload);
      //   }
      // }
    },
    REMOVE_FAVORITE: (state, action) => {
      // state.favorites.filter((value, index) => {
      //   if (value.sourceName === action.payload.sourceName) {
      //     return state.favorites.slice(index);
      //   }
      // });
    },
  },
});

export const { UPDATE_FAVORITE, REMOVE_FAVORITE } = favoriteReducer.actions;

export default favoriteReducer.reducer;
