import { createSlice } from '@reduxjs/toolkit';

const homeItemReducer = createSlice({
  name: 'homeItemSlice',
  initialState: {
    items: {},
    actioMovieList: {},
  },
  reducers: {
    getAll(state, action) {
      state.items = action.payload;
    },
    getActionMovie(state, action) {
      state.actioMovieList = action.payload;
    },
  },
});
const { actions, reducer } = homeItemReducer;
export const { getAll, getActionMovie } = actions;
export default reducer;
