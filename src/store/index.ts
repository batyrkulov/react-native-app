import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./root-reducer";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ['system'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

export * from './user-slice';
export * from './root-reducer';
export * from './user-selector';




























const aa = (s) => {
  const letters = {}
  let prev = null

  for (let i = 0; i < s.length; i++) {
    if (isNaN(parseInt(s.charAt(i)))) {
      if (!i) {
        prev = i
      } else {
        if (letters.hasOwnProperty(s.charAt(prev))) {
          letters[s.charAt(prev)] += parseInt(s.substring(prev + 1, i))
        } else {
          letters[s.charAt(prev)] = parseInt(s.substring(prev + 1, i))
        }
        prev = i
      }
    } else if (i == (s.length - 1)) {
      if (letters.hasOwnProperty(s.charAt(prev))) {
        letters[s.charAt(prev)] += parseInt(s.substring(prev + 1, i + 1))
      } else {
        letters[s.charAt(prev)] = parseInt(s.substring(prev + 1, i + 1))
      }
    }
  }
  return Object.entries(Object.fromEntries(Object.entries(letters).sort())).reduce((total, item) => {
    return `${total}${item[0]}${item[1]}`
  }, '')
}

console.log(aa('a1b2c3'))
console.log(aa('a55b2c3a4'))
console.log(aa('a1b2c3b200'))