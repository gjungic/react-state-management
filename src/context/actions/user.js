import { LOGIN_USER_SUCCESS, LOGOUT_USER } from '../consts';

export const logInUserSuccess = payload => ({
  type: LOGIN_USER_SUCCESS,
  payload
});

export const logOutUser = () => ({ type: LOGOUT_USER });