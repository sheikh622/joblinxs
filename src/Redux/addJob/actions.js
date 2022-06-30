import {
    ADD_JOB,
    ADD_JOB_SUCCESS,
    GET_JOB_SUCCESS,
    GET_JOB
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
