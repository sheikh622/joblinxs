import produce from "immer";
import {
  GET_REPORT_LIST_SUCCESS,
  CHANGE_REPORT_ACTIVE_PAGE,
  GET_REPORT_BLOCK_SUCCESS
} from "./constants";


const initialState = {
  Reports: [],
  ReportActivePage: 0,
  ReportBlock: [],
  

};

const ReportListing = produce((state = initialState, action) => {
  switch (action.type) {
    case GET_REPORT_LIST_SUCCESS:
      state.Reports = action.payload;
      break;
    case CHANGE_REPORT_ACTIVE_PAGE:
      state.ReportActivePage = action.payload;
      break;
    case GET_REPORT_BLOCK_SUCCESS:
      state.ReportBlock = action.payload;
      break;
    default:
  }
}, initialState);

export default ReportListing;
