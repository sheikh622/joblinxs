import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { history, persistor, store } from "../Store";
import App from "./App";


export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </ConnectedRouter>
  </Provider>
);
