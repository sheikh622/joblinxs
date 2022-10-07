import {
  GET_ADMIN_PROFILE_SUCCESS,
  GET_ADMIN_PROFILE,
  UPDATE_ADMIN_PROFILE
} from "./constants";

export const getAdminProfile = (data) => ({
  type:  GET_ADMIN_PROFILE,
  payload: data,
});
export const getAdminProfileSuccess = (data) => (
  {
  type: GET_ADMIN_PROFILE_SUCCESS,
  payload: data,
});
export const updateAdminProfile = (data) => ({
  type:  UPDATE_ADMIN_PROFILE,
  payload: data,
});
