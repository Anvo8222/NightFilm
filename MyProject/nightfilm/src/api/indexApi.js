import {
  setCartoonItemList,
  setOddItemList,
  setPopularItemList,
  setTrendingItemList,
  setUpcomingItemList,
} from '../slice/home';
import axiosClient from './axiosClient';
import { popularMovieAPI, trendingMovieAPI, upcomingMovieAPI, cartoonMovieAPI, nowPlayingMovieAPI } from './apiConfig';

export function getPopularItemList() {
  return async (dispatch) => {
    axiosClient
      .get(popularMovieAPI)
      .then((response) => {
        dispatch(setPopularItemList(response));
      })
      .catch((error) => {});
  };
}
export function getTrendingItemList() {
  return async (dispatch) => {
    axiosClient
      .get(trendingMovieAPI)
      .then((response) => {
        dispatch(setTrendingItemList(response));
      })
      .catch((error) => {});
  };
}
export function getUpcomingItemList() {
  return async (dispatch) => {
    axiosClient
      .get(upcomingMovieAPI)
      .then((response) => {
        dispatch(setUpcomingItemList(response));
      })
      .catch((error) => {});
  };
}
export function getCartoonItemList() {
  return async (dispatch) => {
    axiosClient
      .get(cartoonMovieAPI)
      .then((response) => {
        dispatch(setCartoonItemList(response));
      })
      .catch((error) => {});
  };
}
export function getOddItemList() {
  return async (dispatch) => {
    axiosClient
      .get(nowPlayingMovieAPI)
      .then((response) => {
        dispatch(setOddItemList(response));
      })
      .catch((error) => {});
  };
}
