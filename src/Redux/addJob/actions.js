import {
    ADD_JOB,
    ADD_JOB_SUCCESS,
    GET_JOB_SUCCESS,
    GET_JOB,
    FAVOURITE_JOB_LIST_SUCCESS,
    FAVOURITE_JOB_LIST,
    DELETE_ADD_JOB,
    MARK_AS_FAVOURITE_JOB,
    JOB_BY_ID,
    JOB_BY_ID_SUCCESS,
    UPDATE_JOB_SUCCESS,
    UPDATE_JOB
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
export const markAsFavouriteJob = (data) => ({
  type: MARK_AS_FAVOURITE_JOB,
  payload: data,
});
export const jobById = (data) => ({
  type: JOB_BY_ID,
  payload: data,
});
export const jobByIdSuccess = (data) => ({
  type:  JOB_BY_ID_SUCCESS,
  payload: data,
});
export const updateJob = (data) => ({
  type: UPDATE_JOB,
  payload: data,
});
export const updateJobSuccess = (data) => ({
  type:  UPDATE_JOB_SUCCESS,
  payload: data,
});