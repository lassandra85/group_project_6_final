import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authReducer } from '../redux/auth/slice';
// import { userReducer } from './user/userSlice';
import { noticesReducer } from './notices/slice';
import { persistStore } from 'redux-persist';


import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};


export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    // user: userReducer,
    notices: noticesReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);