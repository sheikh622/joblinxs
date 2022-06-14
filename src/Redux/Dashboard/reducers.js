import produce from "immer";
import { GET_SEEKER_LISTING_SUCCESS } from "./constants";
const initialState = {
  getSeekerListing: [],
};
const Seeker = produce((state = initialState, action) => {
  switch (action.type) {
    case GET_SEEKER_LISTING_SUCCESS:
      state.getSeekerListing = action.payload;
      break;
    default:
  }
}, initialState);

export default Seeker;