import produce from "immer";
import {
    ADD_JOB_SUCCESS
} from "./constants";
const initialState = {
  addJob:[],
};
const addJob = produce((state = initialState, action) => {
  switch (action.type) {
    case  ADD_JOB_SUCCESS:
      state.addJob = action.payload;
      break;
   
    default:
  }
}, initialState);
export default addJob;