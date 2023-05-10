"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialCounter = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounter,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByAmount: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
