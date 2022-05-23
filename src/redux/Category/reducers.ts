import produce from "immer";
import {
  ADD_CATEGORY_SUCCESS,
  CHANGE_USERS_ACTIVE_PAGE,
  GET_USER_BLOCK_SUCCESS,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_DETAILS_SUCCESS
} from "./constants";
const initialState = {
  addCategory: [],
  UserActivePage: 0,
  UserBlock: [],
  UserProfile:[],
  UserDetails:[],
};
const User = produce((state = initialState, action: any) => {
  
  switch (action.type) {
    case ADD_CATEGORY_SUCCESS:
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
        case GET_USER_DETAILS_SUCCESS:
        state.UserDetails = action.payload;
        break;
    default:
  }
}, initialState);

export default User;
