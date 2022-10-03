import produce from "immer";
import {
  GET_LIST_SUCCESS, GENERATE_TOKEN_SUCCESS,ZOOM_MEETING_SUCCESS
} from "./constants";
const initialState = {
  ListData: [],
  Token: [],
  Meeting: [],
};
const Chat = produce((state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_SUCCESS:
      state.ListData = action.payload;
      break;
    case GENERATE_TOKEN_SUCCESS:
      state.Token = action.payload;
      break;
    case ZOOM_MEETING_SUCCESS:
      state.Meeting = action.payload;
      break;
    default:
  }
}, initialState);
export default Chat;
