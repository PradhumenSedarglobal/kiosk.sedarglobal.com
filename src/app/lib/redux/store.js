import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "./slices/stepSlice";
import scannerReducer from "./slices/scannerSlice";
import threedReducer from "./slices/threedSlice";
import fontReducer from "./slices/fontSlice";
import {categoryApi} from '../../services/categoryApi'

const store = configureStore({
  reducer: {
    step: stepReducer,
    scanner: scannerReducer,
    threed: threedReducer,
    font: fontReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware),
});

export default store;
