import {

  CHANGE_DISPUTE_ACTIVE_PAGE, GET_DISPUTE_LIST_SUCCESS, GET_DISPUTE_LIST

} from "./constants";

export const getDisputeList = (data) => ({
  type: GET_DISPUTE_LIST,
  payload: data,
});
export const getDisputeListSuccess = (data) => ({
  type: GET_DISPUTE_LIST_SUCCESS,
  payload: data,
});
export const changeDisputeActivePage = (data) => ({
  type: CHANGE_DISPUTE_ACTIVE_PAGE,
  payload: data,
});
// export const getReportBlock = (data) => ({
//   type: GET_REPORT_BLOCK,
//   payload: data,
// });
// export const getReportBlockSuccess = () => ({
//   type: GET_REPORT_BLOCK_SUCCESS,
// });

