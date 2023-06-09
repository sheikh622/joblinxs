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
  UPDATE_JOB,
  GET_JOB_APPLICANTS,
  GET_JOB_APPLICANTS_SUCCESS,
  CONFIRM_APPLICANTS,
  CONFIRM_APPLICANTS_SUCCESS,
  GET_LOG_HOURS_SUCCESS,
  GET_LOG_HOURS,
  APPROVED_LOG_HOURS,
  APPROVED_LOG_HOURS_SUCCESS,
  GET_SINGLE_USER,
  GET_SINGLE_USER_SUCCESS,
  EMERGENCY_JOB,
  RATE_PROVIDER,
  GET_HIRED_APPLICANTS,
  GET_HIRED_APPLICANTS_SUCCESS,
  COMPLETE_JOB,
  CONFIRM_JOB,
  GET_APPLICANTS_BYUSERID,
  GET_APPLICANTS_BYUSERID_SUCCESS, SEND_OFFER, SEND_OFFER_SUCCESS, EXTEND_TIME_SUCCESS, EXTEND_TIME, GET_EXTEND_SUCCESS, GET_EXTEND
} from "./constants";

export const addFormJob = (data) => (
  {
    type: ADD_JOB,
    payload: data,
  });
export const getJobListingSuccess = (data) => ({
  type: ADD_JOB_SUCCESS,
  payload: data,
});
export const getJobs = (data) => ({
  type: GET_JOB,
  payload: data,
});
export const getJobsSuccess = (data) => ({
  type: GET_JOB_SUCCESS,
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
  type: JOB_BY_ID_SUCCESS,
  payload: data,
});
export const updateJob = (data) => ({
  type: UPDATE_JOB,
  payload: data,
});
export const updateJobSuccess = (data) => ({
  type: UPDATE_JOB_SUCCESS,
  payload: data,
});
export const getApplicants = (data) => ({
  type: GET_JOB_APPLICANTS,
  payload: data,
});
export const getApplicantsSuccess = (data) => ({
  type: GET_JOB_APPLICANTS_SUCCESS,
  payload: data,
});
export const getHiredApplicants = (data) => ({
  type: GET_HIRED_APPLICANTS,
  payload: data,
});
export const getHiredApplicantsSuccess = (data) => ({
  type: GET_HIRED_APPLICANTS_SUCCESS,
  payload: data,
});
export const getConfirmApplicants = (data) => ({
  type: CONFIRM_APPLICANTS,
  payload: data,
});
export const getConfirmSuccess = (data) => ({
  type: CONFIRM_APPLICANTS_SUCCESS,
  payload: data,
});
export const getLogHours = (data) => ({
  type: GET_LOG_HOURS,
  payload: data,
});
export const getLogHoursSuccess = (data) => ({
  type: GET_LOG_HOURS_SUCCESS,
  payload: data,
});
export const getApprovedHours = (data) => ({
  type: APPROVED_LOG_HOURS,
  payload: data,
});
export const getApprovedHoursSuccess = (data) => ({
  type: APPROVED_LOG_HOURS_SUCCESS,
  payload: data,
});
export const getSingleUser = (data) => ({
  type: GET_SINGLE_USER,
  payload: data,
});
export const getSingleUserSuccess = (data) => ({
  type: GET_SINGLE_USER_SUCCESS,
  payload: data,
});
export const rateProvider = (data) => ({
  type: RATE_PROVIDER,
  payload: data,
});
export const completeJob = (data) => ({
  type: COMPLETE_JOB,
  payload: data,
});
export const confirmJob = (data) => ({
  type: CONFIRM_JOB,
  payload: data,
});

export const getApplicantsByUserId = (data) => ({
  type: GET_APPLICANTS_BYUSERID,
  payload: data,
});
export const getApplicantsByUserIdSuccess = (data) => ({
  type: GET_APPLICANTS_BYUSERID_SUCCESS,
  payload: data,
});
export const emergencyJob = (data) => ({
  type: EMERGENCY_JOB,
  payload: data,
});
export const sendOfferJob = (data) => (
  {
    type: SEND_OFFER,
    payload: data,
  });
export const sendOfferJobSuccess = (data) => ({
  type: SEND_OFFER_SUCCESS,
  payload: data,
});
export const extendJobTime = (data) => ({
  type: EXTEND_TIME,
  payload: data,
});
export const extendJobTimeSuccess = (data) => ({
  type: EXTEND_TIME_SUCCESS,
  payload: data,
});
export const getExtend = (data) => ({
  type: GET_EXTEND,
  payload: data,
});
export const getExtendSuccess = (data) => ({
  type: GET_EXTEND_SUCCESS,
  payload: data,
});