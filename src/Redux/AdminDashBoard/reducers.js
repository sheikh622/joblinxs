import produce from "immer";
import {
  GET_ADMIN_USERS_SUCCESS,
  GET_ADMIN_CHARTS_SUCCESS
} from "../AdminDashBoard/constants";
const initialState = {
  UsersCounts: "",
  UsersChartMonths:"",
  
};
const DashboardUsersCount = produce((state = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN_USERS_SUCCESS:
      state.UsersCounts = action.payload;
      break;
      case GET_ADMIN_CHARTS_SUCCESS:
      state.UsersChartMonths = action.payload;
      break;
    default:
  }
}, initialState);
export default DashboardUsersCount;
