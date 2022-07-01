import produce from "immer";
import {
  ADD_JOB_SUCCESS,
  GET_JOB_SUCCESS,
  FAVOURITE_JOB_LIST_SUCCESS,
} from "./constants";
const initialState = {
  addJob: [],
  getJob: [],
  favouriteJob:[],
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
    default:
  }
}, initialState);
export default addJob;