import {
  GET_REPORT_BLOCK,GET_REPORT_BLOCK_SUCCESS,
  CHANGE_REPORT_ACTIVE_PAGE,GET_REPORT_LIST_SUCCESS, GET_REPORT_LIST
  
} from "./constants";

export const getReportList = (data) => ({
  type: GET_REPORT_LIST,
  payload: data,
});
export const getReportListSuccess = (data) => ({
  type: GET_REPORT_LIST_SUCCESS,
  payload: data,
});
export const changeReportActivePage = (data) => ({
  type: CHANGE_REPORT_ACTIVE_PAGE,
  payload: data,
});
export const getReportBlock = (data) => ({
  type: GET_REPORT_BLOCK,
  payload: data,
});
export const getReportBlockSuccess = () => ({
  type: GET_REPORT_BLOCK_SUCCESS,
});

