import {
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE
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