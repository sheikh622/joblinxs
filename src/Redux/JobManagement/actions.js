import {
  CHANGE_USERS_ACTIVE_PAGE,
  GET_JOB_LISTING,
  GET_JOB_LISTING_SUCCESS,
  // GET_CATEGORY_PROFILE,
  // GET_CATEGORY_PROFILE_SUCCESS,
  DELETE_JOB
} from "./constants";

export const getJobListing = (data) => ({
  type:  GET_JOB_LISTING,
  payload: data,
});
export const getJobListingSuccess = (data) => ({
  type: GET_JOB_LISTING_SUCCESS,
  payload: data,
});
// export const getCategoryProfile = (data) => ({
//   type:GET_CATEGORY_PROFILE,
//   payload: data,
// });
// export const getCategoryProfileSuccess = (data) => ({
//   type: GET_CATEGORY_PROFILE_SUCCESS,
//   payload: data,
// });
export const deleteJob = (data) => {
  return {
    type: DELETE_JOB,
    payload: data,
  }
}
export const changeUsersActivePage = (data) => ({
  type: CHANGE_USERS_ACTIVE_PAGE,
  payload: data,
});
