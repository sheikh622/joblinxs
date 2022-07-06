import produce from "immer";
import {
  GET_PROFILE_SUCCESS,
} from "./constants";
const initialState = {
  profile: "",
};
const Jobs = produce((state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      state.profile = action.payload;
      break;
    default:
  }
}, initialState);
export default Jobs;
