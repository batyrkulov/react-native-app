import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IListItem, IListReducerState } from "type";
import { createComment, createPost, deleteComment, deletePost, loadComments, loadPosts, updateComment, updatePost } from "./thunk";

const initialState: IListReducerState = {
  list: [],
  comments: [],
  loadings: {
    isLoadPostsLoading: false,
    isLoadCommentsLoading: false,
    isCreatePostLoading: false,
    isCreateCommentLoading: false,
    isUpdatePostLoading: false,
    isUpdateCommentLoading: false,
    isDeletePostLoading: false,
    isDeleteCommentLoading: false,
  },
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setList(state, { payload }: PayloadAction<IListItem[]>) {
      state.list = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadPosts.pending, (state) => {
      state.loadings.isLoadPostsLoading = true
    })
    builder.addCase(loadPosts.fulfilled, (state, { payload }) => {
      state.list = payload
      state.loadings.isLoadPostsLoading = false
    })
    builder.addCase(loadPosts.rejected, (state, action) => {
      state.loadings.isLoadPostsLoading = false
    })

    builder.addCase(loadComments.pending, (state) => {
      state.loadings.isLoadCommentsLoading = true
    })
    builder.addCase(loadComments.fulfilled, (state, { payload }) => {
      state.comments = payload
      state.loadings.isLoadCommentsLoading = false
    })
    builder.addCase(loadComments.rejected, (state, action) => {
      state.loadings.isLoadCommentsLoading = false
    })

    builder.addCase(createPost.pending, (state) => {
      state.loadings.isCreatePostLoading = true
    })
    builder.addCase(createPost.fulfilled, (state, { payload }) => {
      state.list.push(payload)
      state.loadings.isCreatePostLoading = false
    })
    builder.addCase(createPost.rejected, (state, action) => {
      state.loadings.isCreatePostLoading = false
    })

    builder.addCase(createComment.pending, (state) => {
      state.loadings.isCreateCommentLoading = true
    })
    builder.addCase(createComment.fulfilled, (state, { payload }) => {
      state.comments.push(payload)
      state.loadings.isCreateCommentLoading = false
    })
    builder.addCase(createComment.rejected, (state, action) => {
      state.loadings.isCreateCommentLoading = false
    })

    builder.addCase(updatePost.pending, (state) => {
      state.loadings.isUpdatePostLoading = true
    })
    builder.addCase(updatePost.fulfilled, (state, { payload }) => {
      const index = state.list.findIndex(item => item.id === payload.id);
      if (index !== -1) {
        state.list[index] = payload;
      }
      state.loadings.isUpdatePostLoading = false
    })
    builder.addCase(updatePost.rejected, (state, action) => {
      state.loadings.isUpdatePostLoading = false
    })

    builder.addCase(updateComment.pending, (state) => {
      state.loadings.isUpdateCommentLoading = true
    })
    builder.addCase(updateComment.fulfilled, (state, { payload }) => {
      const index = state.comments.findIndex(item => item.id === payload.id);
      if (index !== -1) {
        state.comments[index] = payload;
      }
      state.loadings.isUpdateCommentLoading = false
    })
    builder.addCase(updateComment.rejected, (state, action) => {
      state.loadings.isUpdateCommentLoading = false
    })

    builder.addCase(deletePost.pending, (state) => {
      state.loadings.isDeletePostLoading = true
    })
    builder.addCase(deletePost.fulfilled, (state, { payload }) => {
      state.list = state.list.filter(item => item.id !== payload)
      state.loadings.isDeletePostLoading = false
    })
    builder.addCase(deletePost.rejected, (state, action) => {
      state.loadings.isDeletePostLoading = false
    })

    builder.addCase(deleteComment.pending, (state) => {
      state.loadings.isDeleteCommentLoading = true
    })
    builder.addCase(deleteComment.fulfilled, (state, { payload }) => {
      state.comments = state.comments.filter(item => item.id !== payload)
      state.loadings.isDeleteCommentLoading = false
    })
    builder.addCase(deleteComment.rejected, (state, action) => {
      state.loadings.isDeleteCommentLoading = false
    })
  },
});

export const {
  setList,
} = listSlice.actions;

export default listSlice.reducer;