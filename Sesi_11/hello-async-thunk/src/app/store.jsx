import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import logger from "redux-logger";
import React from "react";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
