import produce from "immer";
import {
  ADD_JOB_SUCCESS,
  GET_JOB_SUCCESS,
  FAVOURITE_JOB_LIST_SUCCESS,
  JOB_BY_ID_SUCCESS,
  UPDATE_JOB_SUCCESS,
  GET_JOB_APPLICANTS_SUCCESS,
  CONFIRM_APPLICANTS_SUCCESS,
  GET_LOG_HOURS_SUCCESS,
  APPROVED_LOG_HOURS_SUCCESS,
  GET_SINGLE_USER_SUCCESS,
  GET_HIRED_APPLICANTS_SUCCESS
} from "./constants";
const initialState = {
  addJob: [],
  getJob: [],
  favouriteJob: [],
  jobById: [],
  updateJob: [],
  Applicants: [],
  hiredApplicants:[],
  favouriteJob: [],
  ConfirmApplicants: [],
  logHours: [],
  AppvoedHours:[],
  getSingle:[],
};
const addJob = produce((state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB_SUCCESS:
      state.addJob = action.payload;
      break;
    case GET_JOB_SUCCESS:
      state.getJob = action.payload;
      break;
    case FAVOURITE_JOB_LIST_SUCCESS:
      state.favouriteJob = action.payload;
      break;
    case JOB_BY_ID_SUCCESS:
      state.jobById = action.payload;
      break;
    case UPDATE_JOB_SUCCESS:
      state.updateJob = action.payload;
      break;
    case GET_JOB_APPLICANTS_SUCCESS:
      state.Applicants = action.payload;
      break;
      case GET_JOB_APPLICANTS_SUCCESS:
      state.Applicants = action.payload;
      break;
    case GET_HIRED_APPLICANTS_SUCCESS:
      state.hiredApplicants = action.payload;
      break;
    case GET_LOG_HOURS_SUCCESS:
      state.logHours = action.payload;
      break;
      case APPROVED_LOG_HOURS_SUCCESS:
      state.AppvoedHours = action.payload;
      break;
      case GET_SINGLE_USER_SUCCESS:
        state.getSingle = action.payload;
        break;
    default:
  }
}, initialState);
export default addJob;