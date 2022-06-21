/* eslint-disable operator-linebreak */
import { createSlice } from '@reduxjs/toolkit';

const homeItemReducer = createSlice({
  name: 'homeItemSlice',
  initialState: {
    popularItemList: {},
    trendingItemList: {},
    upcomingItemList: {},
    cartoonItemList: {},
    oddItemList: {},
  },
  reducers: {
    setPopularItemList(state, action) {
      state.popularItemList = action.payload;
    },
    setTrendingItemList(state, action) {
      state.trendingItemList = action.payload;
    },
    setUpcomingItemList(state, action) {
      state.upcomingItemList = action.payload;
    },
    setCartoonItemList(state, action) {
      state.cartoonItemList = action.payload;
    },
    setOddItemList(state, action) {
      state.oddItemList = action.payload;
    },
  },
});
const { actions, reducer } = homeItemReducer;
export const { setPopularItemList, setTrendingItemList, setUpcomingItemList, setCartoonItemList, setOddItemList } =
  actions;
export default reducer;
