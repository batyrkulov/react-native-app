import { createSelector } from '@reduxjs/toolkit';

import { RootState } from './root-reducer';

export const userSelector = {
  id: createSelector(
    (state: RootState) => state.user.id,
    (value) => value,
  ),
};
