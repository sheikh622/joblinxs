import {
  CHANGE_DISPUTE_ACTIVE_PAGE, GET_DISPUTE_LIST_SUCCESS, GET_DISPUTE_LIST, DISPUTE_REASON,DISPUTE_REASON_SUCCESS,
  ADD_DISPUTE,ADD_DISPUTE_SUCCESS,GET_DISPUTE_BLOCK_SUCCESS,GET_DISPUTE_BLOCK

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
export const getDisputeBlock = (data) => ({
  type: GET_DISPUTE_BLOCK,
  payload: data,
});
export const getDisputeBlockSuccess = () => ({
  type: GET_DISPUTE_BLOCK_SUCCESS,
});
export const getDisputeReason = (data) => ({
  type: DISPUTE_REASON,
  payload: data,
});
export const DisputeReasonSuccess = (data) => ({
  type: DISPUTE_REASON_SUCCESS,
  payload: data,
});
export const getAddDispute = (data) => ({
  type: ADD_DISPUTE,
  payload: data,
});
export const addDisputeSuccess = (data) => ({
  type: ADD_DISPUTE_SUCCESS,
  payload: data,
});