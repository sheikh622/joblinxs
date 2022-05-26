import {
  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  CHANGE_USERS_ACTIVE_PAGE,
  GET_CATEGORY_LIST,
  GET_CATEGORY_LIST_SUCCESS,
UPDATE_CATEGORY,
UPDATE_CATEGORY_SUCCESS,
DELETE_CATEGORY
} from "./constants";

export const addCategory = (data: any) => ({
  type: ADD_CATEGORY,
  payload: data,
});
export const addCategorySuccess = (data: any) => ({
  type: ADD_CATEGORY_SUCCESS,
  payload: data,
});

export const getCategoryList = (data: any) => ({
  type:  GET_CATEGORY_LIST,
  payload: data,
});
export const getCategoryListSuccess = (data:any) => ({
  type: GET_CATEGORY_LIST_SUCCESS,
  payload: data,
});
export const updateCategory = (data: any) => ({
  type:  UPDATE_CATEGORY,
  payload: data,
});
export const updateCategorySuccess = (data:any) => ({
  type: UPDATE_CATEGORY_SUCCESS,
  payload: data,
});
export const deleteCategory = (data:any) => {
  return {
    type: DELETE_CATEGORY,
    payload: data,
  }
}
export const changeUsersActivePage = (data: any) => ({
  type: CHANGE_USERS_ACTIVE_PAGE,
  payload: data,
});
