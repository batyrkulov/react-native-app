import { createAsyncThunk } from '@reduxjs/toolkit'

import {
  addComment,
  addPost,
  editComment,
  editPost,
  getComments,
  getPosts,
  removeComment,
  removePost,
} from 'api'
import { IComment, ICommonCreateAsyncThunkThirdType, IListItem } from 'type'

export const loadPosts = createAsyncThunk<
  IListItem[],
  null,
  ICommonCreateAsyncThunkThirdType
>('loadPosts', async (_) => {
  try {
    const posts: IListItem[] = await getPosts()
    return posts
  } catch (error) {
    return Promise.reject()
  }
})

export const loadComments = createAsyncThunk<
  IComment[],
  null,
  ICommonCreateAsyncThunkThirdType
>('loadComments', async (_) => {
  try {
    const comments: IComment[] = await getComments()
    return comments
  } catch (error) {
    return Promise.reject()
  }
})

export const createPost = createAsyncThunk<
  IListItem,
  IListItem,
  ICommonCreateAsyncThunkThirdType
>('createPost', async (data) => {
  try {
    await addPost(data)
    return data
  } catch (error) {
    return Promise.reject()
  }
})

export const createComment = createAsyncThunk<
  IComment,
  IComment,
  ICommonCreateAsyncThunkThirdType
>('createComment', async (data) => {
  try {
    await addComment(data)
    return data
  } catch (error) {
    return Promise.reject()
  }
})

export const updatePost = createAsyncThunk<
  IListItem,
  IListItem,
  ICommonCreateAsyncThunkThirdType
>('updatePost', async (data) => {
  try {
    await editPost(data)
    return data
  } catch (error) {
    return Promise.reject()
  }
})

export const updateComment = createAsyncThunk<
  IComment,
  IComment,
  ICommonCreateAsyncThunkThirdType
>('updateComment', async (data) => {
  try {
    await editComment(data)
    return data
  } catch (error) {
    return Promise.reject()
  }
})

export const deletePost = createAsyncThunk<
  number,
  number,
  ICommonCreateAsyncThunkThirdType
>('deletePost', async (data) => {
  try {
    await removePost(data)
    return data
  } catch (error) {
    return Promise.reject()
  }
})

export const deleteComment = createAsyncThunk<
  number,
  number,
  ICommonCreateAsyncThunkThirdType
>('deleteComment', async (data) => {
  try {
    await removeComment(data)
    return data
  } catch (error) {
    return Promise.reject()
  }
})

