import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/users/authSlice";
import logger from "redux-logger";
import React from "react";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Bila sudah jangan untuk mendaftarkan authSlice ini ke dalam app/store.js.
