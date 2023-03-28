import produce from "immer";
import {
  ADD_ADMIN_CATEGORY_SUCCESS,
  CHANGE_USERS_ACTIVE_PAGE,
  GET_CATEGORY_LIST_SUCCESS,
  UPDATE_CATEGORY_SUCCESS,
  GET_USERCATEGORY_LIST_SUCCESS,
  ADD_SUB_ADMIN_CATEGORY_SUCCESS,
  GET_SINGLE_LIST_SUCCESS
} from "./constants";
const initialState = {
  addCategory: [],
  UserActivePage: 0,
  getCategoryList: [],
  updateCategory: [],
  UserCatergory: [],
  SubCategory: [],
  SingleList: [],
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
    case GET_USERCATEGORY_LIST_SUCCESS:
      state.UserCatergory = action.payload;
      break;
    case UPDATE_CATEGORY_SUCCESS:
      state.updateCategory = action.payload;
      break;
    case ADD_SUB_ADMIN_CATEGORY_SUCCESS:
      state.SubCategory = action.payload;
      break;
    case GET_SINGLE_LIST_SUCCESS:
      state.SingleList = action.payload;
      break;
    default:
  }
}, initialState);

export default Category;
