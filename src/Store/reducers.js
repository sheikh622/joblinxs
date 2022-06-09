import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
// import Settings from "../settings/reducers";
// import Common from "../common/reducers";
import auth from "../Redux/auth/reducers"
import User from '../Redux/userManagement/reducers';
import Category from '../Redux/Category/reducers'
// import Category from 'redux/Category/reducers'
import CategoryListing from "../Redux/categoryManagement/reducers";
const rootReducer = (history) => {
  return combineReducers({
    User,
    auth,
    Category,
    CategoryListing,
    router: connectRouter(history),
  });

}
export default rootReducer;