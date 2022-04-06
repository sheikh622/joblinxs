import React from "react";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import { ConnectedRouter } from "connected-react-router";
import AuthRoutes from "@crema/utility/AuthRoutes";
import AppContextProvider from "@crema/utility/AppContextProvider";
import AppThemeProvider from "@crema/utility/AppThemeProvider";
import AppStyleProvider from "@crema/utility/AppStyleProvider";
import AppLocaleProvider from "@crema/utility/AppLocaleProvider";
import AppLayout from "@crema/core/AppLayout";
// import configureStore, { history } from "redux/store";
import FirebaseAuthProvider from "./@crema/services/auth/firebase/FirebaseAuthProvider";
import { PersistGate } from "redux-persist/lib/integration/react";
// const store = configureStore();
import { store, persistor, history } from './redux/store';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./assets/scss/style.css"

const App = () => (
  <AppContextProvider>
    <Provider store={store}>
      <AppThemeProvider>
        <AppStyleProvider>
          <AppLocaleProvider>
            <ConnectedRouter history={history}>
              <ToastContainer autoClose={8000} />
              <PersistGate persistor={persistor}>
                <FirebaseAuthProvider>
                  <AuthRoutes>
                    <CssBaseline />
                    <AppLayout />
                  </AuthRoutes>
                </FirebaseAuthProvider>
              </PersistGate>
            </ConnectedRouter>
          </AppLocaleProvider>
        </AppStyleProvider>
      </AppThemeProvider>
    </Provider>
  </AppContextProvider>
);

export default App;
