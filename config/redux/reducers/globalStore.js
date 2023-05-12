"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const globalStore = {
  dataCategory: [],
  dataIndonesia: "kosong",
  favorites: [],
  isLoading: false,
};

export const globalReducer = createSlice({
  name: "category",
  initialState: globalStore,
  reducers: {
    UPDATE_DATA_CATEGORY: (state, action) => {
      state.dataCategory = action.payload;
    },
    UPDATE_DATA_INDONESIA: (state, action) => {
      state.dataIndonesia = action.payload;
    },
    UPDATE_DATA_FAVORITE: (state, action) => {
      state.favorites = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataIndonesia.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDataIndonesia.fulfilled, (state, action) => {
        state.dataIndonesia = action.payload;
      })
      .addCase(getDataIndonesia.rejected, () => {
        console.log("getAPI gagal");
      });
  },
});

export const {
  UPDATE_DATA_CATEGORY,
  UPDATE_DATA_INDONESIA,
  UPDATE_DATA_FAVORITE,
} = globalReducer.actions;

export default globalReducer.reducer;

export const getDataIndonesia = createAsyncThunk(
  "dataIndonesia/getDataIndonesia",
  async (codeIndonesia) => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=${
          codeIndonesia ?? "indonesia"
        }&from=2023-04-11&to=2023-05-11&sortBy=popularity&apiKey=eb23dff920014345abbb26601b67d874`
      );
      // console.log(res);
      return res.data.articles;
      // try {
      //   const res = await axios.get(
      //     `https://randomuser.me/api/?results=${codeIndonesia ?? 20}`
      //   );
      //   // console.log(res);
      //   return res.data.results;
    } catch (error) {
      throw error;
    }
  }
);
