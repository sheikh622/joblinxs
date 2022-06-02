import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";

import Preloader from "../components/Preloader";
import { isLogin } from "../Redux/auth/sagas";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);

  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <>
            <Preloader show={loaded ? false : true} /> <Component {...props} />{" "}
          </>
        )
      }
    />
  );
};

export default PublicRoute;
