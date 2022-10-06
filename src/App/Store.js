import { configureStore } from "@reduxjs/toolkit";
import aminReducer from "../features/AdminSlice";

const store = configureStore({
  reducer: {
    adminReducer: aminReducer,
  },
});

export default store;
