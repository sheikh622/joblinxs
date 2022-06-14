import {
  CHANGE_USERS_ACTIVE_PAGE, DELETE_USER, GET_USERS_LIST,
  GET_USERS_LIST_SUCCESS, GET_USER_BLOCK,
  GET_USER_BLOCK_SUCCESS, GET_USER_DETAILS_SUCCESS, GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS
} from "./constants";

export const getUsersList = (data) => ({
  type: GET_USERS_LIST,
  payload: data,
});
export const getUsersListSuccess = (data) => ({
  type: GET_USERS_LIST_SUCCESS,
  payload: data,
});
export const changeUsersActivePage = (data) => ({
  type: CHANGE_USERS_ACTIVE_PAGE,
  payload: data,
});
export const getUserBlock = (data) => ({
  type: GET_USER_BLOCK,
  payload: data,
});
export const getUserBlockSuccess = () => ({
  type: GET_USER_BLOCK_SUCCESS,
});
export const getUserProfile = (data) => ({
  type: GET_USER_PROFILE,
  payload: data,
});
export const getUserProfileSuccess = () => ({
  type: GET_USER_PROFILE_SUCCESS,
});
export const deleteUser = (data) => ({

  type: DELETE_USER,
  payload: data,

});
export const getUserDetails = (data) => ({
  type: GET_USER_DETAILS_SUCCESS,
  payload: data,
});
export const getUserDetailsSuccess = () => ({
  type: GET_USER_DETAILS_SUCCESS,
});
