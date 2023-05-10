"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import globalStore from "./reducers/globalStore";
// import { categories } from "./reducers/dataCategory";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    storeGlobal: globalStore,
  },
});
