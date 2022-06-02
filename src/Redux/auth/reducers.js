import produce from "immer";

import {
  LOGIN_SUCCESS,
  SET_LOADER,
  LOGOUT,
  RESET_PASSWORD_SUCCESS,

} from "./constants";

const initialState = {
  user: null,
  token: null,
  loader: false,
  resetPasswordToken: null,
};

const Auth = produce((state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      state.user = action.payload.user;
      state.token = action.payload.access_token;
      break;
    case RESET_PASSWORD_SUCCESS:
      state.resetPasswordToken = action.payload;
      break;
    case SET_LOADER:
      state.loader = action.payload;
      break;
    case LOGOUT:
      state.user = null;
      state.token = null;
      break;
    default:
  }
}, initialState);

export default Auth;
