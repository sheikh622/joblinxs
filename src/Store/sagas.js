import { all } from "redux-saga/effects";
import AuthSaga from "../Redux/auth/sagas";
import CategorySaga from "../Redux/Category/sagas";
import CategoryManagementSaga from "../Redux/categoryManagement/sagas";
import SeekerManagementSaga from "../Redux/Dashboard/saga";
import JobManagementSaga from "../Redux/JobManagement/sagas";
// import CommonSaga from 'redux/common/saga';
import UserSaga from "../Redux/userManagement/sagas";
import addJobSaga from "../Redux/addJob/saga";
import ProfileSaga from "../Redux/profile/sagas"
import NotificationSaga from "../Redux/notification/sagas";
import BusinessCategorySaga from "../Redux/BusinessCategory/sagas";
import ChatSaga from "../Redux/chat/sagas"
import ReportSaga from "../Redux/ReportManagement/sagas";
export default function* rootSaga() {
  yield all([
    AuthSaga(),
    UserSaga(),
    CategorySaga(),
    CategoryManagementSaga(),
    JobManagementSaga(),
    SeekerManagementSaga(),
    addJobSaga(),
    ProfileSaga(),
    NotificationSaga(),
    BusinessCategorySaga(),
    ChatSaga(),
    ReportSaga(),
  ]);
}
