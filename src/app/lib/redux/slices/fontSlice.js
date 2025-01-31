import { createSlice } from "@reduxjs/toolkit";
import typography, {
    Helvetica_Neue,
    Helvetica_Neue_Regular,
    Helvetica_Neue_Thin,
    Helvetica_Neue_Light,
    Helvetica_Neue_Medium,
    Helvetica_Neue_Bold,
    Helvetica_Neue_Light_Arabic,
    Helvetica_Neue_Bold_Arabic,
    Helvetica_Neue_Regular_Arabic,
    Helvetica_Neue_Thin_Arabic,
    Helvetica_Neue_Medium_Arabic,
    Helvetica_Neue_Arabic,
    porter_bold_3,
  } from "../../../../theme/typography";

const initialState = {
        Helvetica_Neue:Helvetica_Neue,
        Helvetica_Neue_Regular:Helvetica_Neue_Regular,
        Helvetica_Neue_Thin:Helvetica_Neue_Thin,
        Helvetica_Neue_Light:Helvetica_Neue_Light,
        Helvetica_Neue_Medium:Helvetica_Neue_Medium,
        Helvetica_Neue_Bold:Helvetica_Neue_Bold,
        Helvetica_Neue_Light_Arabic:Helvetica_Neue_Light_Arabic,
        Helvetica_Neue_Bold_Arabic:Helvetica_Neue_Bold_Arabic,
        Helvetica_Neue_Regular_Arabic:Helvetica_Neue_Regular_Arabic,
        Helvetica_Neue_Thin_Arabic:Helvetica_Neue_Thin_Arabic,
        Helvetica_Neue_Medium_Arabic:Helvetica_Neue_Medium_Arabic,
        Helvetica_Neue_Arabic:Helvetica_Neue_Arabic,
        porter_bold_3:porter_bold_3,
}


const fontSlice = createSlice({
    name:"font",
    initialState,
    reducers:{
        addFontFamily(state, action) {
            const { fontName, fontValue } = action.payload;
            // Adding or updating the font in the state
            state[fontName] = fontValue; 
          },
    }
})

export const {addFontFamily} = fontSlice.actions;
export default fontSlice.reducer;