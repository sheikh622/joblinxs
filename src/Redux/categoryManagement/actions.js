import {
  GET_CATEGORY_PROFILE,
  GET_CATEGORY_PROFILE_SUCCESS,
  CHANGE_USERS_ACTIVE_PAGE,
  GET_CATEGORY_LISTING,
  GET_CATEGORY_LISTING_SUCCESS,
} from "./constants";

export const getCategoryListing = (data) => ({
  type:  GET_CATEGORY_LISTING,
  payload: data,
});
export const getCategoryListingSuccess = (data) => ({
  type: GET_CATEGORY_LISTING_SUCCESS,
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
