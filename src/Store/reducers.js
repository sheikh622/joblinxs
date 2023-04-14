import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import auth from "../Redux/auth/reducers";
import Category from '../Redux/Category/reducers';
import CategoryListing from "../Redux/categoryManagement/reducers";
import User from '../Redux/userManagement/reducers';
import Job from "../Redux/JobManagement/reducers";
import Seeker from "../Redux/Dashboard/reducers";
import addJob from "../Redux/addJob/reducer";
import ProfileReducer from "../Redux/profile/reducers";
import Notifications from "../Redux/notification/reducers";
import BusinessCategory from "../Redux/BusinessCategory/reducers";
import ReportListing from "../Redux/ReportManagement/reducers";
import ChatReducer from "../Redux/chat/reducers"
import PushNotification from "../Redux/settings/reducers";
import DisputeListing from "../Redux/DisputeManagement/reducers";
import AdminProfile from "../Redux/AdminProfile/reducers";
import DashboardUsersCount from "../Redux/AdminDashBoard/reducers"
const rootReducer = (history) => {
  return combineReducers({
    User,
    auth,
    Category,
    CategoryListing,
    Job,
    addJob,
    Seeker,
    ProfileReducer,
    Notifications,
    BusinessCategory,
    ChatReducer,
    ReportListing,
    PushNotification,
    DisputeListing,
    DashboardUsersCount,
    AdminProfile,
    router: connectRouter(history),
  });

}
export default rootReducer;