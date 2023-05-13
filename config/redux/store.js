"use client";

import { configureStore } from "@reduxjs/toolkit";
import globalStore from "./reducers/globalStore";
import categoryStore from "./reducers/categoryStore";
import favoriteStore from "./reducers/favoriteStore";

export const store = configureStore({
  reducer: {
    // Ingat ambil globalStore bukan globalReducer
    storeGlobal: globalStore,
    storeCategory: categoryStore,
    storeFavorite: favoriteStore,
  },
});
