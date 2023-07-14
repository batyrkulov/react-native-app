import { createSelector } from '@reduxjs/toolkit';

import { RootState } from './root-reducer';

export const listSelector = {
  currentUserList: createSelector(
    (state: RootState) => state.user.id,
    (state: RootState) => state.list.list,
    (userId, list) => list.filter(item => item.authorId === userId),
  ),
};
