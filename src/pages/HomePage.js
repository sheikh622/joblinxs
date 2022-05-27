import React from "react";
import { store, persistor, history } from "../Store";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

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
