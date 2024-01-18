import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice";

export const store = configureStore({
  //A reducer is a function that takes in the previous state of the application and an action(which consists of type and payload), makes some changes to the state based on the action and returns a new value for that particular state
  reducer: {
    authReducer,
  },
});
