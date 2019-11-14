import { FETCH_SHOWS_SUCCESS } from '../consts';

export const fetchTvShowsSuccess = payload => ({
  type: FETCH_SHOWS_SUCCESS,
  payload
});