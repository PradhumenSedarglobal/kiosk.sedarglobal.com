import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../app/redux/home/homeSlice"

export default configureStore({
    reducer:{
        home:homeReducer,
    }
})