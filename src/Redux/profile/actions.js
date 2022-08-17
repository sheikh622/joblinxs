import {
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE,
  BLOCK_USER,
  BLOCK_USER_SUCCESS,
  REPORT_USER_LIST_SUCCESS,
  REPORT_USER_LIST,
  REPORTED_USER_SUCCESS,
  REPORTED_USER,
  UNBLOCK_USER,
  UNBLOCK_USER_SUCCESS

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
export const unblockUser = (data) => (
  {
  type: UNBLOCK_USER,
  payload: data,
});
export const unblockUserSuccess = (data) => ({
  type:  UNBLOCK_USER_SUCCESS,
  payload: data,
});
export const reportUserList = () => (
  {
  type: REPORT_USER_LIST,
  
});
export const reportListSuccess = (data) => ({
  type:  REPORT_USER_LIST_SUCCESS,
  payload: data,
});
export const reportedUser  = (data) => (
  {
  type: REPORTED_USER,
  payload: data,
  
});
export const reportedUserSuccess = (data) => ({
  type:  REPORTED_USER_SUCCESS,
  payload: data,
});