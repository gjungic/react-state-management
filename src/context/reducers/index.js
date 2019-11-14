import userReducer from './user';
import tvShowReducer from './tv-show';

export const combinedReducers = ({ user, tvShow }, action) => ({
  user: userReducer(user, action),
  tvShow: tvShowReducer(tvShow, action)
});
