import { FETCH_SHOWS_SUCCESS } from '../consts';

export const initialState = {
  shows: []
};

export default (state, action) => {
  switch (action.type) {
    case FETCH_SHOWS_SUCCESS:
      return {
        ...state,
        shows: action.payload
      }
    default:
      return state;
  }
}
