import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import auth from "../Redux/auth/reducers";
import Category from '../Redux/Category/reducers';
import CategoryListing from "../Redux/categoryManagement/reducers";
import User from '../Redux/userManagement/reducers';
import Job from "../Redux/JobManagement/reducers";
import Seeker from "../Redux/Dashboard/reducers";
const rootReducer = (history) => {
  return combineReducers({
    User,
    auth,
    Category,
    CategoryListing,
    Job,
    Seeker,
    router: connectRouter(history),
  });

}
export default rootReducer;