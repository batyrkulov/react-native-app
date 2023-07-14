import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IListItem, IListReducerState } from "type";

const initialState: IListReducerState = {
  list: [],
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setList(state, { payload }: PayloadAction<IListItem[]>) {
      state.list = payload;
    },
    addToList(state, { payload }: PayloadAction<IListItem>) {
      state.list.push(payload);
    },
    updateListItem(state, { payload: { itemId, item } }: PayloadAction<{ itemId: number; item: IListItem }>) {
      const itemIndex: number = state.list.findIndex(item => item.id === itemId);
      if (itemIndex !== -1) state.list[itemIndex] = item;
    },
    removeListItem(state, { payload }: PayloadAction<number>) {
      state.list = state.list.filter(item => item.id !== payload)
    },
  },
  extraReducers: (builder) => {

  },
});

export const {
  setList,
  addToList,
  updateListItem,
  removeListItem,
} = listSlice.actions;

export default listSlice.reducer;