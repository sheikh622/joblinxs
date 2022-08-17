import {
  GET_LIST,
  SEND_MESSAGE,
  GET_LIST_SUCCESS
} from "./constants";

export const getList = (data) => ({
  type:  GET_LIST,
  payload: data,
});
export const getListSuccess = (data) => ({
  type:  GET_LIST_SUCCESS,
  payload: data,
});
export const SendMessage = (data) => (
  {
  type: SEND_MESSAGE,
  payload: data,
});