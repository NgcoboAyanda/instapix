import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import imagesSlice from '../features/images/imagesSlice';


export const store = configureStore({
  reducer: {
    'auth': authSlice.reducer,
    'images': imagesSlice.reducer
  },
});
