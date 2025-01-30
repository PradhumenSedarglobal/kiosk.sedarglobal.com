import { createSlice } from "@reduxjs/toolkit";

const scannerSlice = createSlice({
    name: "scanner",
    initialState:{ value: false },
    reducers:{
        showScanner(state, action){
            state.value = action.payload
        }
    }
})

export const {showScanner} = scannerSlice.actions
export default scannerSlice.reducer;