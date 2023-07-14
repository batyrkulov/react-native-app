import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUserReducerState } from "type";

const initialState: IUserReducerState = {
  id: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<IUserReducerState>) {
      state.id = payload.id
    },
  },
  extraReducers: (builder) => {

  },
});

export const {
  setUser,
} = userSlice.actions;

export default userSlice.reducer;