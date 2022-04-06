import { combineReducers  } from 'redux';
import { connectRouter } from 'connected-react-router';
import Settings from "../settings/reducers";
// import Common from "../common/reducers";
import Auth from "../auth/reducers";

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth: Auth,
  settings: Settings,

});

export default rootReducer as any;
