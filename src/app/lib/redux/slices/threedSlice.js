import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reset:false
}

const threedSlice = createSlice({
    name:"threed",
    initialState,
    reducers:{
        reset(state,action){
            state.reset = action.payload;
        }
    }
})

export const {reset} = threedSlice.actions;
export default threedSlice.reducer;