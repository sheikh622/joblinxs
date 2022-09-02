import produce from "immer";
import {
  GET_PROFILE_SUCCESS,
  BLOCK_USER_SUCCESS,
  UNBLOCK_USER_SUCCESS,
  REPORT_USER_LIST_SUCCESS,
  REPORTED_USER_SUCCESS,
  HIRED_APPLICANTS_SUCCESS,
  GET_REVIEWS_SUCCESS
} from "./constants";
const initialState = {
  profile: "",
  BlockUser: "",
  Unblock: "",
  ReportList: "",
  ReportedUser: "",
  HiredApplicants: "",
  Reviews: "",
};
const Jobs = produce((state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      state.profile = action.payload;
      break;
    case BLOCK_USER_SUCCESS:
      state.BlockUser = action.payload;
      break;
    case UNBLOCK_USER_SUCCESS:
      state.UnblockUser = action.payload;
      break;
    case REPORT_USER_LIST_SUCCESS:
      state.ReportList = action.payload;
      break;
    case REPORTED_USER_SUCCESS:
      state.ReportedUser = action.payload;
      break;
    case HIRED_APPLICANTS_SUCCESS:
      state.HiredApplicants = action.payload;
      break;
    case GET_REVIEWS_SUCCESS:
      state.Reviews = action.payload;
      break;
    default:
  }
}, initialState);
export default Jobs;
