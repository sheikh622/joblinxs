import {
  GET_LIST,
  SEND_MESSAGE,
  GET_LIST_SUCCESS,
  CUSTOM_OFFER_ACCEPT,GENERATE_TOKEN_SUCCESS,GENERATE_TOKEN,
  ZOOM_MEETING_SUCCESS,ZOOM_MEETING
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

export const CustomOfferAccept = (data) => (
  {
  type: CUSTOM_OFFER_ACCEPT,
  payload: data,
});
export const getToken = (data) => ({
  type:  GENERATE_TOKEN,
  payload: data,
});
export const getTokenSuccess = (data) => ({
  type:  GENERATE_TOKEN_SUCCESS,
  payload: data,
});
export const getMeeting = (data) => ({
  type:  ZOOM_MEETING,
  payload: data,
});
export const getMeetingSuccess = (data) => ({
  type:  ZOOM_MEETING_SUCCESS,
  payload: data,
});