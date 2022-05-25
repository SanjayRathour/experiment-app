import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

export const answerSlice = createSlice({
  name: "tournament",
  initialState,
  reducers: {
    setAnswers: (state: any, action: PayloadAction<any>) => {
      return { ...action.payload };
    },
    resetAnswers: (state: any) => {
      return { ...initialState };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAnswers, resetAnswers } = answerSlice.actions;

export default answerSlice.reducer;
