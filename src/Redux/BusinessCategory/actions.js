import {
  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  CHANGE_USERS_ACTIVE_PAGE, DELETE_CATEGORY,
  GET_BUSNIESSCATEGORY_LIST,
  GET_BUSINESSCATEGORY_LIST_SUCCESS,
  SAVE_CATEGORY_SUCCESS,
  SAVE_CATEGORY,
  Copy_BUSINESSCATEGORY_LIST_SUCCESS,
  Copy_BUSNIESSCATEGORY_LIST
} from "./constants";
export const addCategory = (data) => ({
  type: ADD_CATEGORY,
  payload: data,
});
export const addCategorySuccess = (data) => ({
  type: ADD_CATEGORY_SUCCESS,
  payload: data,
});

export const getBusinessCategoryList = (data) => ({
  type: GET_BUSNIESSCATEGORY_LIST,
  payload: data,
});
export const getBusinessCategoryListSuccess = (data) => ({
  type: GET_BUSINESSCATEGORY_LIST_SUCCESS,
  payload: data,
});
export const CopyBusinessCategoryList = (data) => ({
  type: Copy_BUSNIESSCATEGORY_LIST,
  payload: data,
});
export const CopyBusinessCategoryListSuccess = (data) => ({
  type: Copy_BUSINESSCATEGORY_LIST_SUCCESS,
  payload: data,
});
export const saveCategory = (data) => ({
  type: SAVE_CATEGORY,
  payload: data,
});
export const saveCategorySuccess = (data) => ({
  type: SAVE_CATEGORY_SUCCESS,
  payload: data,
});
// export const changeUsersActivePage = (data) => ({
//   type: CHANGE_USERS_ACTIVE_PAGE,
//   payload: data,
// });
