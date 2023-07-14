import { BASE_URL } from '@env';
import { create } from 'apisauce';

export const api = create({
  baseURL: BASE_URL,
  timeout: 4000,
  headers: {
    Accept: 'application/json',
  },
});


