import produce from "immer";
import {
  GET_NOTIFICATION_SUCCESS,
} from "./constants";
const initialState = {
  notification: "",
};
const Notifications = produce((state = initialState, action) => {
  switch (action.type) {
    case GET_NOTIFICATION_SUCCESS:
      state.notification = action.payload;
      break;
    default:
  }
}, initialState);
export default Notifications;
