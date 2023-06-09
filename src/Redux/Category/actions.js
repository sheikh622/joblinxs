import {
  ADD_ADMIN_CATEGORY_SUCCESS,
  ADD_ADMIN_CATEGORY,
  CHANGE_USERS_ACTIVE_PAGE, DELETE_CATEGORY, GET_CATEGORY_LIST,
  GET_CATEGORY_LIST_SUCCESS,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_SUCCESS,
  GET_USERCATEGORY_LIST_SUCCESS,
  GET_USERCATEGORY_LIST,ADD_SUB_ADMIN_CATEGORY_SUCCESS,ADD_SUB_ADMIN_CATEGORY,
  GET_SINGLE_LIST,GET_SINGLE_LIST_SUCCESS
} from "./constants";
export const addAdminCategory = (data) => ({
  type: ADD_ADMIN_CATEGORY,
  payload: data,
});
export const addCategorySuccess = (data) => ({
  type: ADD_ADMIN_CATEGORY_SUCCESS,
  payload: data,
});

export const getCategoryList = (data) => ({
  type: GET_CATEGORY_LIST,
  payload: data,
});
export const getCategoryListSuccess = (data) => ({
  type: GET_CATEGORY_LIST_SUCCESS,
  payload: data,
});
export const getUserCategoryList = (data) => ({
  type: GET_USERCATEGORY_LIST,
  payload: data,
});
export const getUserCategoryListSuccess = (data) => ({
  type: GET_USERCATEGORY_LIST_SUCCESS,
  payload: data,
});
export const updateCategory = (data) => ({
  type: UPDATE_CATEGORY,
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
export const addSubAdminCategory = (data) => ({
  type: ADD_SUB_ADMIN_CATEGORY,
  payload: data,
});
export const addSubCategorySuccess = (data) => ({
  type: ADD_SUB_ADMIN_CATEGORY_SUCCESS,
  payload: data,
});
export const getSingleList = (data) => ({
  type: GET_SINGLE_LIST,
  payload: data,
});
export const getSingleListSuccess = (data) => ({
  type: GET_SINGLE_LIST_SUCCESS,
  payload: data,
});