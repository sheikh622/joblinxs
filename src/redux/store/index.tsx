import {applyMiddleware, compose, createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './sagas';
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'connected-react-router';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: []
}

const history = createBrowserHistory();
export type AppState = ReturnType<typeof rootReducer>;
 
const persistedReducer = persistReducer(persistConfig, rootReducer(history))
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);

const middlewares = [sagaMiddleware, routeMiddleware];

const w: any = window as any;
const composeEnhancers = w.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore() {
  const store = createStore(persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares)));
  sagaMiddleware.run(rootSaga);
  return store;
}

const store = configureStore();

const persistor = persistStore(store);

export {store, persistor, history};