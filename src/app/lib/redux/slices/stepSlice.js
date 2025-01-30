import { createSlice } from "@reduxjs/toolkit";

const stepSlice = createSlice({
    name: "step",
    initialState:{ value: 0 },
    reducers:{
        incrementStep(state){
            state.value += 1;
        },
        decrementStep(state){
            state.value -= 1;
        },
        manualStep(state,action){
            state.value = action.payload;
        }
    }
})

export const {incrementStep,decrementStep,manualStep} = stepSlice.actions
export default stepSlice.reducer;