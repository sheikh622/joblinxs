import produce from "immer";
import {
  CHANGE_USERS_ACTIVE_PAGE,
  GET_JOB_LISTING_SUCCESS,
} from "./constants";
const initialState = {
  Jobs: [],
  UserActivePage: 0,
};
const Jobs = produce((state = initialState, action) => {
  switch (action.type) {
    case GET_JOB_LISTING_SUCCESS:
      state.Jobs = action.payload;
      break;
    case CHANGE_USERS_ACTIVE_PAGE:
      state.UserActivePage = action.payload;
      break;
    default:
  }
}, initialState);
export default Jobs;
