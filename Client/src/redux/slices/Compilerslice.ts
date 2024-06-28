// import { javascript } from "@codemirror/lang-javascript";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CompilerSliceStateType{
    html:string,
    css:string,
    javascript:string,
    currentLanguage:"html" | "css" | "javascript",
  }
  const initialState:CompilerSliceStateType ={
    html:"",
    css:"",
    javascript:"",
    currentLanguage:"html",
  }

const Compilerslice=createSlice({
    name:"Compilerslice",
    initialState,
    reducers:{
        updateCurrentLanguage:(state,action:PayloadAction<CompilerSliceStateType["currentLanguage"]>)=>{
           state.currentLanguage=action.payload
        }
    },
})

export default Compilerslice.reducer;
export const {updateCurrentLanguage}=Compilerslice.actions;