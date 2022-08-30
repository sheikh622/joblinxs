import {
GET_USER_NOTIFICATION,GET_USER_NOTIFICATION_SUCCESS,ON_NOTIFICATION,ON_NOTIFICATION_SUCCESS
  
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

