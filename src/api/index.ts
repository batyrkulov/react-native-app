import { BASE_URL } from '@env';
import { create } from 'apisauce';
import { IComment, IListItem } from 'type';

import { del, get, post, put } from './common';

export const api = create({
  baseURL: BASE_URL,
  timeout: 4000,
  headers: {
    Accept: 'application/json',
  },
});

export const getPosts = async (): Promise<IListItem[]> => {
  try {
    const result = await get<IListItem[]>(`/posts`)
    return new Promise(resolve => {
      resolve(result.map(item => ({ ...item, body: 'Some body' })))
    })
  } catch (error) {
    throw error
  }
}

export const getComments = async (): Promise<IComment[]> => {
  try {
    return await get<IComment[]>(`/comments`)
  } catch (error) {
    throw error
  }
}

export const addPost = async (data: IListItem): Promise<IListItem> => {
  try {
    return await post<IListItem>(`/posts`, data)
  } catch (error) {
    throw error
  }
}

export const addComment = async (data: IComment): Promise<IComment> => {
  try {
    return await post<IComment>(`/comments`, data)
  } catch (error) {
    throw error
  }
}

export const editPost = async (data: IListItem): Promise<IListItem> => {
  try {
    return await put<IListItem>(`/posts`, data)
  } catch (error) {
    throw error
  }
}

export const editComment = async (data: IComment): Promise<IComment> => {
  try {
    return await put<IComment>(`/comments`, data)
  } catch (error) {
    throw error
  }
}

export const removePost = async (id: number): Promise<number> => {
  try {
    return await del<number>(`/posts`, id)
  } catch (error) {
    throw error
  }
}

export const removeComment = async (id: number): Promise<number> => {
  try {
    return await del<number>(`/comments`, id)
  } catch (error) {
    throw error
  }
}


