import { configureStore } from '@reduxjs/toolkit';
import homeItemReducer from './slice/home';

const store = configureStore({
  reducer: {
    homeItem: homeItemReducer,
  },
});
export default store;
