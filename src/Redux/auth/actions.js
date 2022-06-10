import {
  FORGOT_PASSWORD, LOGIN,
  LOGIN_SUCCESS, LOGOUT, RESET_PASSWORD, RESET_PASSWORD_SUCCESS, SET_LOADER
} from "./constants";
  
  export const logoutRequest = () => ({
    type: LOGOUT,
  });
  
  export const loginRequest = (data) => ({
    type: LOGIN,
    payload: data,
  });
  
  export const loginRequestSuccess = (data) => ({
    type: LOGIN_SUCCESS,
    payload: data,
  });
  
  export const forgotPassword = (data) => {
    return {
      type: FORGOT_PASSWORD,
      payload: data,
    };
  };
  export const resetPassword = (data) => {
    return {
      type: RESET_PASSWORD,
      payload: data
    };
  };
  export const resetPasswordSuccess = (data) => {
    return {
      type: RESET_PASSWORD_SUCCESS,
      payload: data
    };
  };
  export const setLoader = (data) => {
    return {
      type: SET_LOADER,
      payload: data
    };
  };
 