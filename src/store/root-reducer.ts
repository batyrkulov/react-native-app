import { combineReducers } from "@reduxjs/toolkit";

import listSlice from "./list-slice";
import userSlice from "./user-slice";

export const rootReducer = combineReducers({
  user: userSlice,
  list: listSlice,
});

export type RootState = ReturnType<typeof rootReducer>;