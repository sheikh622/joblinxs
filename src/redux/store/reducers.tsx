import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Settings from "../settings/reducers";
import Common from "../common/reducers";
import Auth from "../auth/reducers";
import User from 'redux/userManagement/reducers';
import Category from 'redux/Category/reducers'
const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth: Auth,
  settings: Settings,
  common: Common,
  User: User,
  Category:Category,
});

export default rootReducer as any;
