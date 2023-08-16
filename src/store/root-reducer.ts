import { combineReducers } from "@reduxjs/toolkit";

import listSlice from "./list-slice";

export const rootReducer = combineReducers({
  list: listSlice,
});

export type RootState = ReturnType<typeof rootReducer>;