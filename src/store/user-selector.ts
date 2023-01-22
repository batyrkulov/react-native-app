import { createSelector } from '@reduxjs/toolkit';

import { RootState } from './root-reducer';

export const userSelector = {
  name: createSelector(
    (state: RootState) => state.user.name,
    (value) => value,
  ),
};
