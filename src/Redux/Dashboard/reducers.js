import produce from "immer";
import { GET_SEEKER_LISTING_SUCCESS, NEW_ARRIVAL_SUCCESS, TOP_RATED_SUCCESS, GET_CATEGORY_SUCCESS,GET_JOB_FILTER_SUCCESS } from "./constants";
const initialState = {
  getSeekerListing: [],
  newArrival: [],
  topRated: [],
  CategoryList: [],
  FilterList:[],
};
const Seeker = produce((state = initialState, action) => {
  switch (action.type) {
    case GET_SEEKER_LISTING_SUCCESS:
      state.getSeekerListing = action.payload;
      break;
    case NEW_ARRIVAL_SUCCESS:
      return {
        ...state,
        newArrival: action.payload,
      }
      break;
    case TOP_RATED_SUCCESS:
      state.topRated = action.payload;
      break;
    case GET_CATEGORY_SUCCESS:
      state.CategoryList = action.payload;
      break;
      case GET_JOB_FILTER_SUCCESS:
        state.FilterList = action.payload;
        break;
    default:
  }
}, initialState);

export default Seeker;