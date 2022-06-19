import { getActionMovie, getAll } from '../slice/home';
import axiosClient from './axiosClient';

export function getAllItem() {
  return async (dispatch) => {
    axiosClient
      .get('/index.json')
      .then((response) => {
        dispatch(getAll(response.data.pageProps.itemsInHome));
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
}
export function getActionMovieList() {
  return async (dispatch) => {
    axiosClient
      .get('/the-loai/hanh-dong.json?slug=hanh-dong')
      .then((response) => {
        dispatch(getActionMovie(response.data.pageProps.data));
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
}
