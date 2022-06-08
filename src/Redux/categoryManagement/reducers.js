import produce from "immer";
import {

  CHANGE_USERS_ACTIVE_PAGE,
  GET_CATEGORY_LIST_SUCCESS,
  GET_CATEGORY_PROFILE_SUCCESS
} from "./constants";
const initialState = {

  UserActivePage: 0,
  getCategoryList: [],
  getCategoryProfile: [],
};
const Category = produce((state = initialState, action) => {

  switch (action.type) {
    case CHANGE_USERS_ACTIVE_PAGE:
      state.UserActivePage = action.payload;
      break;
    case GET_CATEGORY_LIST_SUCCESS:
      state.getCategoryList = action.payload;
      break;
    case GET_CATEGORY_PROFILE_SUCCESS:
      state.getCategoryProfile = action.payload;
      break;
    default:
  }
}, initialState);

export default Category;
