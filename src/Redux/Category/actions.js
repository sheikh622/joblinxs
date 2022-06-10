import {
  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  CHANGE_USERS_ACTIVE_PAGE, DELETE_CATEGORY, GET_CATEGORY_LIST,
  GET_CATEGORY_LIST_SUCCESS,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_SUCCESS
} from "./constants";

export const addCategory = (data) => ({
  type: ADD_CATEGORY,
  payload: data,
});
export const addCategorySuccess = (data) => ({
  type: ADD_CATEGORY_SUCCESS,
  payload: data,
});

export const getCategoryList = (data) => ({
  type:  GET_CATEGORY_LIST,
  payload: data,
});
export const getCategoryListSuccess = (data) => ({
  type: GET_CATEGORY_LIST_SUCCESS,
  payload: data,
});
export const updateCategory = (data) => ({
  type:  UPDATE_CATEGORY,
  payload: data,
});
export const updateCategorySuccess = (data) => ({
  type: UPDATE_CATEGORY_SUCCESS,
  payload: data,
});
export const deleteCategory = (data) => {
  return {
    type: DELETE_CATEGORY,
    payload: data,
  }
}
export const changeUsersActivePage = (data) => ({
  type: CHANGE_USERS_ACTIVE_PAGE,
  payload: data,
});
