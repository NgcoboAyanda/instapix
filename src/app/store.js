import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import generateImageSlice from '../features/generateImage/generateImageSlice';


export const store = configureStore({
  reducer: {
    'auth': authSlice.reducer,
    'images': generateImageSlice.reducer
  },
});
