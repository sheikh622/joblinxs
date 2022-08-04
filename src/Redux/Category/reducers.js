import produce from "immer";
import {
  ADD_ADMIN_CATEGORY_SUCCESS,
  CHANGE_USERS_ACTIVE_PAGE,
  GET_CATEGORY_LIST_SUCCESS,
  UPDATE_CATEGORY_SUCCESS
} from "./constants";
const initialState = {
  addCategory: [],
  UserActivePage: 0,
  getCategoryList: [],
  updateCategory: [],
};
const Category = produce((state = initialState, action) => {

  switch (action.type) {
    case ADD_ADMIN_CATEGORY_SUCCESS:
      state.addCategory = action.payload;
      break;
    case CHANGE_USERS_ACTIVE_PAGE:
      state.UserActivePage = action.payload;
      break;
    case GET_CATEGORY_LIST_SUCCESS:
      state.getCategoryList = action.payload;
      break;
    case UPDATE_CATEGORY_SUCCESS:
      state.updateCategory = action.payload;
      break;
    default:
  }
}, initialState);

export default Category;
