import {
  LOGIN_USER_SUCCESS,
  LOGOUT_USER
} from '../consts';


export const initialState = {
  currentUser: {},
  loggedIn: false
};

export default (state, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loggedIn: true
      }
      case LOGOUT_USER:
        return {
          ...state,
          currentUser: {},
          loggedIn: false
        }
    default:
      return state;
  }
}
