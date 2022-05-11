import produce from "immer";

import {
  GET_USERS_LIST_SUCCESS,
  CHANGE_USERS_ACTIVE_PAGE,
  GET_USER_BLOCK_SUCCESS,
  GET_USER_PROFILE_SUCCESS
} from "./constants";

const initialState = {
  Users: [],
  UserActivePage: 0,
  UserBlock: [],
  UserProfile:[],
};

const User = produce((state = initialState, action: any) => {
  console.log("action", action)
  switch (action.type) {
    case GET_USERS_LIST_SUCCESS:
      state.Users = action.payload;
      break;
    case CHANGE_USERS_ACTIVE_PAGE:
      state.UserActivePage = action.payload;
      break;
    case GET_USER_BLOCK_SUCCESS:
      state.UserBlock = action.payload;
      break;
      case GET_USER_PROFILE_SUCCESS:
        state.UserProfile = action.payload;
        break;
    default:
  }
}, initialState);

export default User;
