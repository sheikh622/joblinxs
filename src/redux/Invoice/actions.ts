import {
  GET_ADMIN_LIST,
  GET_ADMIN_LIST_SUCCESS,
  CHANGE_ADMIN_ACTIVE_PAGE,
  ADD_ADMIN_REQUEST,
  ADD_ADMIN_REQUEST_SUCCESS,
  GET_PERMISSION,
  GET_PERMISSION_SUCCESS,
  GET_ADMIN_BLOCK,
  GET_ADMIN_BLOCK_SUCCESS,
  DELETE_ADMIN,
  UPDATE_ADMIN, UPDATE_ADMIN_SUCCESS
} from "./constants";

export const getAdminList = (data: any) => ({
  type: GET_ADMIN_LIST,
  payload: data,
});

export const getAdminListSuccess = (data: any) => ({
  type: GET_ADMIN_LIST_SUCCESS,
  payload: data,
});

export const changeAdminActivePage = (data: any) => ({
  type: CHANGE_ADMIN_ACTIVE_PAGE,
  payload: data,
});

export const addAdminRequest = (data: any) => (
  console.log("in action", data),
  {
    type: ADD_ADMIN_REQUEST,
    payload: data,
  });
export const addAdminRequestSuccess = (data: any) => ({
  type: ADD_ADMIN_REQUEST_SUCCESS,
  payload: data,
});
export const getPermission = () => ({
  type: GET_PERMISSION,

});
export const getPermissionSuccess = (data: any) => ({
  type: GET_PERMISSION_SUCCESS,
  payload: data,
});
export const getAdminBlock = (data: any) => ({
  type: GET_ADMIN_BLOCK,
  payload: data,

});
export const getAdminBlockSuccess = () => ({
  type: GET_ADMIN_BLOCK_SUCCESS,
});
export const deletePost = data => {
  return {
    type: DELETE_ADMIN,
    payload: data,
  }
}
export const updateAdmin = data => {
  return {
    type: UPDATE_ADMIN,
    payload: data,
  }
}
export const updateAdminSuccess = data => {
  return {
    type: UPDATE_ADMIN_SUCCESS,
    payload: data,
  }
}