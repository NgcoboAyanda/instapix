import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import imagesSlice from '../features/images/imagesSlice';
import slideshowSlice from '../features/slideshow/slideshow';


export const store = configureStore({
  reducer: {
    'auth': authSlice.reducer,
    'images': imagesSlice.reducer,
    'slideshow': slideshowSlice.reducer
  },
});
