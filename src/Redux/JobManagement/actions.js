import {
  CHANGE_USERS_ACTIVE_PAGE,
  GET_JOB_LISTING,
  GET_JOB_LISTING_SUCCESS,
  DELETE_JOB,GET_JOB_PROFILE,
  GET_JOB_PROFILE_SUCCESS
} from "./constants";

export const getJobListing = (data) => ({
  type:  GET_JOB_LISTING,
  payload: data,
});
export const getJobListingSuccess = (data) => ({
  type: GET_JOB_LISTING_SUCCESS,
  payload: data,
});
export const getJobProfile = (data) => ({
  type:  GET_JOB_PROFILE,
  payload: data,
});
export const getJobProfileSuccess = (data) => ({
  type: GET_JOB_PROFILE_SUCCESS,
  payload: data,
});
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
