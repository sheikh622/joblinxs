import produce from "immer";
import {
  GET_DISPUTE_LIST_SUCCESS,
  CHANGE_DISPUTE_ACTIVE_PAGE,
  GET_DISPUTE_BLOCK_SUCCESS,
  DISPUTE_REASON_SUCCESS,
  ADD_DISPUTE_SUCCESS,
} from "./constants";


const initialState = {
  Dispute: [],
  DisputeActivePage: 0,
  Reasons: [],
  addDispute:[],
  DisputeBlock:[],

};

const DisputeListing = produce((state = initialState, action) => {
  switch (action.type) {
    case GET_DISPUTE_LIST_SUCCESS:
      state.Reports = action.payload;
      break;
    case CHANGE_DISPUTE_ACTIVE_PAGE:
      state.DisputeActivePage = action.payload;
      break;
    case GET_DISPUTE_BLOCK_SUCCESS:
      state.DisputeBlock = action.payload;
      break;
    case DISPUTE_REASON_SUCCESS:
      state.Reasons = action.payload;
      break;
    case ADD_DISPUTE_SUCCESS:
      state.addDispute = action.payload;
      break;
    default:
  }
}, initialState);

export default DisputeListing;
