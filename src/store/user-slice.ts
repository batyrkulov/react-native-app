import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUserReducerState } from "type";

const initialState: IUserReducerState = {
  name: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<IUserReducerState>) {
      state.name = payload.name
    },
  },
  extraReducers: (builder) => {

  },
});

export const {
  setUser,
} = userSlice.actions;

export default userSlice.reducer;