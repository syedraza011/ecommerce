/* Here is where you will configure the store 

*/
import itemSlice from "./reducers/itemSlice";
import userSlice from "./reducers/userSlice";
// import campusSlice from "redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    item: itemSlice,
    user: userSlice,
  },
});

export default store;
