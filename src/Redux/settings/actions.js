import {
  GET_USER_NOTIFICATION, GET_USER_NOTIFICATION_SUCCESS, ON_NOTIFICATION, ON_NOTIFICATION_SUCCESS,
  ADD_CARD_DETAILS, GET_CARD_DETAILS, GET_CARD_DETAILS_SUCCESS, GET_BUSINESS_SEEKER, GET_BUSINESS_SEEKER_SUCCESS, SWITCH_ACCOUNT, SWITCH_ACCOUNT_SUCCESS
} from "./constants";

export const getUserNotification = (data) => ({
  type: GET_USER_NOTIFICATION,
  payload: data,
});
export const getUserNotificationSuccess = (data) => ({
  type: GET_USER_NOTIFICATION_SUCCESS,
  payload: data,
});
export const getONNotification = (data) => ({
  type: ON_NOTIFICATION,
  payload: data,
});
export const getONNotificationSuccess = () => ({
  type: ON_NOTIFICATION_SUCCESS,
});

export const addCardDetails = (data) => ({
  type: ADD_CARD_DETAILS,
  payload: data,
});
export const getCardDetails = (data) => ({
  type: GET_CARD_DETAILS,
  payload: data,
});
export const getCardDetailsSuccess = (data) => ({
  type: GET_CARD_DETAILS_SUCCESS,
  payload: data,
});
export const getUpgradeBusiness = (data) => ({
  type: GET_BUSINESS_SEEKER,
  payload: data,
});
export const getUpgradeBusinessSuccess = (data) => ({
  type: GET_BUSINESS_SEEKER_SUCCESS,
  payload: data,
});
export const getSwitchAccount = (data) => ({
  type: SWITCH_ACCOUNT,
  payload: data,
});
export const getSwitchAccountSuccess = (data) => ({
  type: SWITCH_ACCOUNT_SUCCESS,
  payload: data,
});