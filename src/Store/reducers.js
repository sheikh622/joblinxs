import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
// import Settings from "../settings/reducers";
// import Common from "../common/reducers";
import auth from "../Redux/auth/reducers"
import User from '../Redux/userManagement/reducers';
// import Category from 'redux/Category/reducers'

const rootReducer = (history) => {
  return combineReducers({
    User,
    auth,
    router: connectRouter(history),
  });

}
export default rootReducer;