import {
  LOGOUT,
  LOGIN,
  LOGIN_SUCCESS,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  SET_LOADER,
  RESET_PASSWORD_SUCCESS,
  REGISTER,
  REGISTER_SUCCESS,
} from "./constants";

export const logoutRequest = () => ({
  type: LOGOUT,
});

export const loginRequest = (data: any) => ({
  type: LOGIN,
  payload: data,
});

export const loginRequestSuccess = (data: any) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const forgotPassword = (data: any) => {
  return {
    type: FORGOT_PASSWORD,
    payload: data,
  };
};
export const resetPassword = (data: any) => {
  return {
    type: RESET_PASSWORD,
    payload: data
  };
};
export const resetPasswordSuccess = (data: any) => {
  return {
    type: RESET_PASSWORD_SUCCESS,
    payload: data
  };
};
export const setLoader = (data: any) => {
  return {
    type: SET_LOADER,
    payload: data
  };
};
export const registerRequest = (data: any) => ({
  type: LOGIN,
  payload: data,
});                    
export const registerSuccess = (data: any) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});