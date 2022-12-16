import produce from "immer";
import {
  ADD_CATEGORY_SUCCESS,
  CHANGE_USERS_ACTIVE_PAGE,
  GET_BUSINESSCATEGORY_LIST_SUCCESS,
  SAVE_CATEGORY_SUCCESS,
  Copy_BUSINESSCATEGORY_LIST_SUCCESS
  // UPDATE_CATEGORY_SUCCESS
} from "./constants";
const initialState = {
  addCategory: [],
  // UserActivePage: 0,
  getBusinessCategoryList: [],
  CopyBusinessCategoryList: [],
  saveCategory: [],
};
const BusinessCategory = produce((state = initialState, action) => {

  switch (action.type) {
    case ADD_CATEGORY_SUCCESS:
      state.addCategory = action.payload;
      break;
    case CHANGE_USERS_ACTIVE_PAGE:
      state.UserActivePage = action.payload;
      break;
    case GET_BUSINESSCATEGORY_LIST_SUCCESS:
      state.getBusinessCategoryList = action.payload;
      break;
    case Copy_BUSINESSCATEGORY_LIST_SUCCESS:
      state.CopyBusinessCategoryList = action.payload;
      break;
    case SAVE_CATEGORY_SUCCESS:
      state.saveCategory = action.payload;
      break;
    default:
  }
}, initialState);

export default BusinessCategory;
