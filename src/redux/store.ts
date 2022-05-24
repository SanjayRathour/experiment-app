import { configureStore } from "@reduxjs/toolkit";
import moneyReducer from "./moneySlice";
import productReducer from "./productSlice";
import answerReducer from "./answerSlice";

export const store = configureStore({
  reducer: {
    money: moneyReducer,
    products: productReducer,
    answers: answerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
