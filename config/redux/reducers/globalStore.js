"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const date = new Date();
let currentDate = `${date.getFullYear()}-${
  "0" + (date.getMonth() + 1)
}-${date.getDate()}`;
let oneMouthPastDate = `${date.getFullYear()}-${
  "0" + date.getMonth()
}-${date.getDate()}`;

// console.log(oneMouthPastDate);

const globalStore = {
  dataIndonesia: "kosong",
  isLoading: false,
};

export const globalReducer = createSlice({
  name: "indonesia",
  initialState: globalStore,
  reducers: {
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
        state.isLoading = false;
      })
      .addCase(getDataIndonesia.rejected, () => {
        console.log("getAPI gagal");
      });
  },
});

export const { UPDATE_DATA_INDONESIA, UPDATE_DATA_FAVORITE } =
  globalReducer.actions;

export default globalReducer.reducer;

export const getDataIndonesia = createAsyncThunk(
  "dataIndonesia/getDataIndonesia",
  async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=id&from=${oneMouthPastDate}&to=${currentDate}&sortBy=popularity&apiKey=eb23dff920014345abbb26601b67d874`
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
