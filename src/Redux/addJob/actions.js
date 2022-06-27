import {
    ADD_JOB,
    ADD_JOB_SUCCESS
  } from "./constants";
  
  export const getAddJob = (data) => ({
    type: ADD_JOB,
    payload: data,
  });
  export const getAddJobSuccess = (data) => ({
    type:  ADD_JOB_SUCCESS,
    payload: data,
  });