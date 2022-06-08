import {
  GET_CATEGORY_PROFILE,
  GET_CATEGORY_PROFILE_SUCCESS,
  CHANGE_USERS_ACTIVE_PAGE,
  GET_CATEGORY_LIST,
  GET_CATEGORY_LIST_SUCCESS,
} from "./constants";

export const getCategoryList = (data) => ({
  type:  GET_CATEGORY_LIST,
  payload: data,
});
export const getCategoryListSuccess = (data) => ({
  type: GET_CATEGORY_LIST_SUCCESS,
  payload: data,
});
export const getCategoryProfile = (data) => ({
  type:GET_CATEGORY_PROFILE,
  payload: data,
});
export const getCategoryProfileSuccess = (data) => ({
  type: GET_CATEGORY_PROFILE_SUCCESS,
  payload: data,
});
export const changeUsersActivePage = (data) => ({
  type: CHANGE_USERS_ACTIVE_PAGE,
  payload: data,
});
