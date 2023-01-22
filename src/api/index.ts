import { BASE_URL } from '@env';
import { create } from 'apisauce';

import { IPhoto, IUserCard } from 'type';

export const api = create({
  baseURL: BASE_URL,
  timeout: 4000,
  headers: {
    Accept: 'application/json',
  },
});

export const getUserCards = async (): Promise<IUserCard[]> => {
  return new Promise(async (reslove, reject) => {
    const res = await api.get('/users');
    if (res.ok) reslove(res.data as IUserCard[])
    else reject('Something went wrong');
  });
};

export const getPhotos = (): Promise<IPhoto[]> => {
  return new Promise(async (reslove, reject) => {
    const res = await api.get('/photos');
    if (res.ok) reslove(res.data as IPhoto[])
    else reject('Something went wrong');
  });
};

