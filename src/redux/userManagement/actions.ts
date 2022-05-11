import {
  GET_USERS_LIST,
  GET_USERS_LIST_SUCCESS,
  CHANGE_USERS_ACTIVE_PAGE,
  GET_USER_BLOCK,
  GET_USER_BLOCK_SUCCESS,
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS
} from "./constants";

export const getUsersList = (data: any) => ({
  type: GET_USERS_LIST,
  payload: data,
});
export const getUsersListSuccess = (data: any) => ({
  type: GET_USERS_LIST_SUCCESS,
  payload: data,
});
export const changeUsersActivePage = (data: any) => ({
  type: CHANGE_USERS_ACTIVE_PAGE,
  payload: data,
});
export const getUserBlock = (data: any)=> ({
  type: GET_USER_BLOCK,
  payload: data,
});
export const getUserBlockSuccess = ()=> ({
  type: GET_USER_BLOCK_SUCCESS, 
  
});
export const getUserProfile = (data: any)=> ({
  type: GET_USER_PROFILE,
  payload: data,
});
export const getUserProfileSuccess = ()=> ({
  type: GET_USER_PROFILE_SUCCESS, 
});
