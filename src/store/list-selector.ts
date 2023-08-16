import { createSelector } from '@reduxjs/toolkit';

import { RootState } from './root-reducer';

export const listSelector = {
  list: createSelector(
    (state: RootState) => state.list.list,
    (value) => value,
  ),
  comments: createSelector(
    (state: RootState) => state.list.comments,
    (value) => value,
  ),

  isCreateCommentLoading: createSelector(
    (state: RootState) => state.list.loadings.isCreateCommentLoading,
    (value) => value,
  ),
  isCreatePostLoading: createSelector(
    (state: RootState) => state.list.loadings.isCreatePostLoading,
    (value) => value,
  ),
  isDeleteCommentLoading: createSelector(
    (state: RootState) => state.list.loadings.isDeleteCommentLoading,
    (value) => value,
  ),
  isDeletePostLoading: createSelector(
    (state: RootState) => state.list.loadings.isDeletePostLoading,
    (value) => value,
  ),
  isLoadCommentsLoading: createSelector(
    (state: RootState) => state.list.loadings.isLoadCommentsLoading,
    (value) => value,
  ),
  isLoadPostsLoading: createSelector(
    (state: RootState) => state.list.loadings.isLoadPostsLoading,
    (value) => value,
  ),
  isUpdateCommentLoading: createSelector(
    (state: RootState) => state.list.loadings.isUpdateCommentLoading,
    (value) => value,
  ),
  isUpdatePostLoading: createSelector(
    (state: RootState) => state.list.loadings.isUpdatePostLoading,
    (value) => value,
  ),
};
