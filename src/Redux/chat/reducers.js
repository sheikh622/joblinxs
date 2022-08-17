import produce from "immer";
import {
  GET_LIST_SUCCESS
} from "./constants";
const initialState = {
  ListData: [],
};
const Chat = produce((state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_SUCCESS:
      state.ListData = action.payload;
      break;
    default:
  }
}, initialState);
export default Chat;
