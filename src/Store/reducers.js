import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
// import Settings from "../settings/reducers";
// import Common from "../common/reducers";
import Auth from "../Redux/auth/reducers";
import User from '../Redux/userManagement/reducers';
// import Category from 'redux/Category/reducers'

const rootReducer = (history) => {
  return combineReducers({
    auth: Auth,
    User: User,
    router: connectRouter(history),
  });

}
export default rootReducer;