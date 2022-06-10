import produce from "immer";

import {
  LOGIN_SUCCESS,
  SET_LOADER,
  LOGOUT,
  RESET_PASSWORD_SUCCESS,
} from "./constants";

const initialState = {
  Auther: null,
  token: null,
  loader: false,
  resetPasswordToken: null,
  userRole:"",
};

const Auth = produce((state = initialState, action) => {
  switch (action.type)  {
    case LOGIN_SUCCESS:
      state.Auther = action.payload.user;
      state.token = action.payload.access_token;
      state.userRole=action.payload.user?.userRole
      break;
    case RESET_PASSWORD_SUCCESS:
      state.resetPasswordToken = action.payload;
      break;
    case SET_LOADER:
      state.loader = action.payload;
      break;
    case LOGOUT:
      state.Auther = null;
      state.token = null;
      break;
    default:
  }
}, initialState);

export default Auth;
