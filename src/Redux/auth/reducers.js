import produce from "immer";
import {
  LOGIN_SUCCESS, LOGOUT,
  RESET_PASSWORD_SUCCESS, SET_LOADER,
  ADMIN_UPDATED_SUCCESS,
  LOGIN_FACEBOOK_SUCCESS,
  LOGIN_GOOGLE_SUCCESS
} from "./constants";


const initialState = {
  Auther: null,
  token: null,
  loader: false,
  resetPasswordToken: null,
  userRole: "",
  LoginFacebook: "",
  LoginGoogle: "",

};

const Auth = produce((state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      state.Auther = action.payload.user;
      state.token = action.payload.access_token;
      state.userRole = action.payload.user?.userRole
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
    case ADMIN_UPDATED_SUCCESS:
      state.Auther = action.payload;
      break;
    case LOGIN_FACEBOOK_SUCCESS:
      state.LoginFacebook = action.payload;
      break;
    case LOGIN_GOOGLE_SUCCESS:
      state.LoginGoogle = action.payload;
      break;
    default:
  }
}, initialState);

export default Auth;
