import produce from "immer";
import {
  CHANGE_USERS_ACTIVE_PAGE,
  GET_JOB_LISTING_SUCCESS,
} from "./constants";
const initialState = {
  UserActivePage: 0,
  getJobListing: [], 
 
};
const Job = produce((state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USERS_ACTIVE_PAGE:
      state.UserActivePage = action.payload;
      break;
    case GET_JOB_LISTING_SUCCESS:
      state.getJobListing = action.payload;
      break;
  
    default:
  }
}, initialState);

export default Job;
