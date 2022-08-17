import produce from "immer";
import {
  GET_PROFILE_SUCCESS,
  BLOCK_USER_SUCCESS,
  REPORT_USER_LIST_SUCCESS,
  REPORTED_USER_SUCCESS,
} from "./constants";
const initialState = {
  profile: "",
  BlockUser: "",
  ReportList:"",
  ReportedUser:"",
};
const Jobs = produce((state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      state.profile = action.payload;
      break;
    case BLOCK_USER_SUCCESS:
      state.BlockUser = action.payload;
      break;
      case REPORT_USER_LIST_SUCCESS:
      state.ReportList = action.payload;
      break;
      case REPORTED_USER_SUCCESS:
      state.ReportedUser = action.payload;
      break;
    default:
  }
}, initialState);
export default Jobs;
