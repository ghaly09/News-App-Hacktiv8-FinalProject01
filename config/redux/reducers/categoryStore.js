"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Date for using API date sorting
const date = new Date();
let currentDate = `${date.getFullYear()}-${
  "0" + (date.getMonth() + 1)
}-${date.getDate()}`;
let oneMouthPastDate = `${date.getFullYear()}-${
  "0" + date.getMonth()
}-${date.getDate()}`;

// Store
const categoryStore = {
  dataCategory: "kosong",
  isLoading: false,
};

export const categoryReducer = createSlice({
  name: "category",
  initialState: categoryStore,
  reducers: {
    UPDATE_DATA_CATEGORY: (state, action) => {
      state.dataCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDataCategory.fulfilled, (state, action) => {
        state.dataCategory = action.payload;
        state.isLoading = false;
      })
      .addCase(getDataCategory.rejected, () => {
        console.log("getAPI CATEGORY gagal");
      });
  },
});

export const { UPDATE_DATA_CATEGORY } = categoryReducer.actions;

export default categoryReducer.reducer;

export const getDataCategory = createAsyncThunk(
  "dataCategory/getDataCategory",
  async (codeCategory) => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=${
          codeCategory ?? "covid"
        }&from=${oneMouthPastDate}&to=${currentDate}&sortBy=popularity&apiKey=eb23dff920014345abbb26601b67d874`
      );
      // console.log(res);
      return res.data.articles;
      // try {
      //   const res = await axios.get(
      //     `https://randomuser.me/api/?results=${codeCategory ?? 20}`
      //   );
      //   // console.log(res);
      //   return res.data.results;
    } catch (error) {
      throw error;
    }
  }
);
