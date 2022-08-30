import produce from "immer";
import {
  GET_USER_NOTIFICATION_SUCCESS,
  ON_NOTIFICATION_SUCCESS
} from "./constants";


const initialState = {
  Notification: [],
  onNotification: [],


};

const PushNotification = produce((state = initialState, action) => {
  switch (action.type) {
    case GET_USER_NOTIFICATION_SUCCESS:
      state.Notification = action.payload;
      break;
    case ON_NOTIFICATION_SUCCESS:
      state.onNotification = action.payload;
      break;
    default:
  }
}, initialState);

export default PushNotification;
