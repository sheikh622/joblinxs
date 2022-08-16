import produce from "immer";
import {
  GET_PROFILE_SUCCESS,
  BLOCK_USER_SUCCESS
} from "./constants";
const initialState = {
  profile: "",
  BlockUser: "",
};
const Jobs = produce((state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      state.profile = action.payload;
      break;
    case BLOCK_USER_SUCCESS:
      state.BlockUser = action.payload;
      break;
    default:
  }
}, initialState);
export default Jobs;
