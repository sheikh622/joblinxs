import {
  CommonActionTypes,
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  HIDE_MESSAGE,
  SHOW_MESSAGE,
  TOGGLE_APP_DRAWER,
} from "../../types/actions/Common.action";
import { SUBMIT_EMAIL } from "./constant";

export const submitEmail = (data: any) => {
  return {
    type: SUBMIT_EMAIL,
    payload: data
  };
};
export const fetchStart = (): CommonActionTypes => ({ type: FETCH_START });

export const fetchSuccess = (): CommonActionTypes => ({ type: FETCH_SUCCESS });

export const fetchError = (error: string): CommonActionTypes => ({
  type: FETCH_ERROR,
  error,
});

export const showMessage = (message: string): CommonActionTypes => ({
  type: SHOW_MESSAGE,
  message,
});

export const onToggleAppDrawer = (): CommonActionTypes => ({
  type: TOGGLE_APP_DRAWER,
});

export const hideMessage = (): CommonActionTypes => ({ type: HIDE_MESSAGE });
