import produce from "immer";
import {
  GET_ADMIN_LIST_SUCCESS,
  CHANGE_ADMIN_ACTIVE_PAGE,
  GET_PERMISSION_SUCCESS,
  GET_ADMIN_BLOCK_SUCCESS,
  UPDATE_ADMIN_SUCCESS
} from "./constants";

const initialState = {
  admin: [],
  adminActivePage: 0,
  permissions:[],
  adminBlock:[],
  updateAdmin:[],
};
const Admins = produce((state = initialState, action: any) => {
  switch (action.type) {
    case GET_ADMIN_LIST_SUCCESS:
      state.admin = action.payload;
      break;
    case CHANGE_ADMIN_ACTIVE_PAGE:
      state.adminActivePage = action.payload;
      break;
      case GET_PERMISSION_SUCCESS:
        state.permissions = action.payload;
        break;
        case GET_ADMIN_BLOCK_SUCCESS:
        state.adminBlock = action.payload;
        break;
        case UPDATE_ADMIN_SUCCESS:
          state.updateAdmin = action.payload;
          break;
    default:
  }
}, initialState);

export default Admins;
