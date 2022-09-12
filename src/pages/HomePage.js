import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/lib/integration/react";
import { history, persistor, store } from "../Store";
import App from "./App";
import { GoogleOAuthProvider } from '@react-oauth/google';
const stripePromise = loadStripe(
  "pk_test_51LamT7CQo8XqKBkeWbqXJOa27a9Zgz123u3YYbL2vsPuHT3Fmss9OUXywVcRCSWw47HDk4UuzgpPifXT7EJ6T0aq00bFlSGGV0"
);

export default () => (
  <GoogleOAuthProvider clientId="152202356320-bni7srm4s195ltqvnfh6fh6l37docqnk.apps.googleusercontent.com">
  <Elements stripe={stripePromise}>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <PersistGate persistor={persistor}>
      <ToastContainer autoClose={4000} pauseOnHover={false} pauseOnFocusLoss />
        <App />
      </PersistGate>
    </ConnectedRouter>
  </Provider>
  </Elements>
  </GoogleOAuthProvider>
);
