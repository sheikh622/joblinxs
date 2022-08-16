import {
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE,
  BLOCK_USER,
  BLOCK_USER_SUCCESS 

} from "./constants";

export const getProfile = (data) => ({
  type:  GET_PROFILE,
  payload: data,
});
export const getProfileSuccess = (data) => (
  {
  type: GET_PROFILE_SUCCESS,
  payload: data,
});
export const updateAdminProfile = (data) => ({
  type:  UPDATE_PROFILE,
  payload: data,
});
export const blockUser = (data) => (
  {
  type: BLOCK_USER,
  payload: data,
});
export const blockUserSuccess = (data) => ({
  type:  BLOCK_USER_SUCCESS,
  payload: data,
});