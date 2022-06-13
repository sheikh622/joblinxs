import produce from "immer";
import {

  CHANGE_USERS_ACTIVE_PAGE,
  GET_JOB_LISTING_SUCCESS,
  GET_CATEGORY_PROFILE_SUCCESS
} from "./constants";
const initialState = {

  UserActivePage: 0,
  getCategoryListing: [], 
  getCategoryProfile: [],
};
const Category = produce((state = initialState, action) => {

  switch (action.type) {
    case CHANGE_USERS_ACTIVE_PAGE:
      state.UserActivePage = action.payload;
      break;
    case GET_CATEGORY_LISTING_SUCCESS:
      state.getJobListing = action.payload;
      break;
    case GET_CATEGORY_PROFILE_SUCCESS:
      state.getCategoryProfile = action.payload;
      break;
    default:
  }
}, initialState);

export default Category;
