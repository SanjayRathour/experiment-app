import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  amount: 100,
};

export const moneySlice = createSlice({
  name: "tournament",
  initialState,
  reducers: {
    increaseAmount: (state: any, action: PayloadAction<number>) => {
      state.amount = state.amount + action.payload;
    },
    decreaseAmount: (state: any, action: PayloadAction<number>) => {
      state.amount = state.amount - action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increaseAmount, decreaseAmount } = moneySlice.actions;

export default moneySlice.reducer;
