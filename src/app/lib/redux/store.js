import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "./slices/stepSlice";
import scannerReducer from "./slices/scannerSlice";

const store = configureStore({
  reducer: {
    step: stepReducer,
    scanner: scannerReducer,
  },
});

export default store;
