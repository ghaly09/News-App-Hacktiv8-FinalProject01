"use client";

import { configureStore } from "@reduxjs/toolkit";
import globalStore from "./reducers/globalStore";

export const store = configureStore({
  reducer: {
    storeGlobal: globalStore,
  },
});
