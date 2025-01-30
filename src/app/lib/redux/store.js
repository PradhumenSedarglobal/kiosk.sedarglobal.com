import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "./slices/stepSlice";
import scannerReducer from "./slices/scannerSlice";
import threedReducer from "./slices/threedSlice";

const store = configureStore({
  reducer: {
    step: stepReducer,
    scanner: scannerReducer,
    threed: threedReducer,
  },
});

export default store;
