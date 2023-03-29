import {
  GET_ADMIN_USERS_SUCCESS,
  GET_ADMIN_USERS,
  GET_ADMIN_CHARTS_SUCCESS,GET_ADMIN_CHARTS,
  UPDATE_ADMIN_PROFILE
} from "./constants";

export const getAdminUsers = (data) => ({
  type:  GET_ADMIN_USERS,
  payload: data,
});
export const getAdminUsersSuccess = (data) => (
  {
  type: GET_ADMIN_USERS_SUCCESS,
  payload: data,
});
// export const updateAdminProfile = (data) => ({
//   type:  UPDATE_ADMIN_PROFILE,
//   payload: data,
// });
export const getAdminCharts = (data) => ({
  type:  GET_ADMIN_CHARTS,
  payload: data,
});
export const getAdminChartSuccess = (data) => (
  {
  type: GET_ADMIN_CHARTS_SUCCESS,
  payload: data,
});