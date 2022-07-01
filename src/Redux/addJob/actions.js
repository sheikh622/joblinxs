import {
    ADD_JOB,
    ADD_JOB_SUCCESS,
    GET_JOB_SUCCESS,
    GET_JOB,
    FAVOURITE_JOB_LIST_SUCCESS,
    FAVOURITE_JOB_LIST,
    DELETE_ADD_JOB,
  } from "./constants";
  
  export const getJobListing = (data) => ({
    type: ADD_JOB,
    payload: data,
  });
  export const getJobListingSuccess = (data) => ({
    type:  ADD_JOB_SUCCESS,
    payload: data,
  });
  export const getJobs = (data) => ({
    type: GET_JOB,
    payload: data,
  });
  export const getJobsSuccess = (data) => ({
    type:  GET_JOB_SUCCESS,
    payload: data,
  });
  
export const favouriteJobList = (data) => ({
  type: FAVOURITE_JOB_LIST,
  payload: data,
});
export const favouriteJobListSuccess = (data) => ({
  type: FAVOURITE_JOB_LIST_SUCCESS,
  payload: data,
});
export const deleteAddJob = (data) => {
  return {
    type: DELETE_ADD_JOB,
    payload: data,
  }
}