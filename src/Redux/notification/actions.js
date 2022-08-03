import {
  GET_NOTIFICATION,
  GET_NOTIFICATION_SUCCESS,
} from "./constants";

export const getNotifiaction = (data) => ({
  type:  GET_NOTIFICATION,
  payload: data,
});
export const getNotifiactionSuccess = (data) => (
  {
  type: GET_NOTIFICATION_SUCCESS,
  payload: data,
});