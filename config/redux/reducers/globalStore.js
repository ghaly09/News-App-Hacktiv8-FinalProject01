"use client";

import { createSlice } from "@reduxjs/toolkit";

const globalStore = {
  dataCategory: [],
  favorite: [],
};

export const globalReducer = createSlice({
  name: "category",
  initialState: globalStore,
  reducers: {
    UPDATE_DATA_CATEGORY: (state, action) => {
      state.dataCategory = action.payload;
    },
  },
});

export const { UPDATE_DATA_CATEGORY } = globalReducer.actions;

export default globalReducer.reducer;
