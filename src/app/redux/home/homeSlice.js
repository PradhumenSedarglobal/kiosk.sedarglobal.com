import { Satellite } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: "home",
    initialState:{
        value:14,
    },
    reducers:{
        update:(state) => {
            state.value
        }
    }
})

export const {update} = homeSlice.actions

export default homeSlice.reducer