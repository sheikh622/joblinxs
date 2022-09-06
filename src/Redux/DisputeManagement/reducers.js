import produce from "immer";
import {
  GET_DISPUTE_LIST_SUCCESS,
  CHANGE_DISPUTE_ACTIVE_PAGE,
  // GET_REPORT_BLOCK_SUCCESS
} from "./constants";


const initialState = {
  Dispute: [],
  DisputeActivePage: 0,
  // ReportBlock: [],
  

};

const DisputeListing = produce((state = initialState, action) => {
  switch (action.type) {
    case GET_DISPUTE_LIST_SUCCESS:
      state.Reports = action.payload;
      break;
    case CHANGE_DISPUTE_ACTIVE_PAGE:
      state.DisputeActivePage = action.payload;
      break;
    // case GET_REPORT_BLOCK_SUCCESS:
    //   state.ReportBlock = action.payload;
    //   break;
    default:
  }
}, initialState);

export default DisputeListing;
