import { api } from './'

export const post = async <T = any>(url: string, data = {}): Promise<T> => {
  return new Promise(async (reslove, reject) => {
    try {
      const res = await api.post(url, data);
      if (res.ok) {
        reslove(res.data)
      } else {
        reject('Error')
      }
    } catch (errorObject) {
      reject('Couldnt connect')
    }
  })
}

export const get = async <T = any>(url: string, data = {}): Promise<T> => {
  return new Promise(async (reslove, reject) => {
    try {
      const res = await api.get(url, data)
      if (res.ok) reslove(res.data)
      else {
        reject('Error')
      }
    } catch (errorObject) {
      reject('Couldnt connect')
    }
  })
}

export const put = async <T = any>(url: string, data = {}): Promise<T> => {
  return new Promise(async (reslove, reject) => {
    try {
      //const res = await api.put(url, data)
      //if (res.ok) reslove(res.data)
      reslove(data)
    } catch (errorObject) {
      reject('Couldnt connect')
    }
  })
}

export const del = async <T = any>(url: string, data = {}): Promise<T> => {
  return new Promise(async (reslove, reject) => {
    try {
      //const res = await api.delete(url, {}, { data: { ...data } })
      //if (res.ok) reslove(res.data)
      reslove(data)
    } catch (errorObject) {
      reject('Couldnt connect')
    }
  })
}
