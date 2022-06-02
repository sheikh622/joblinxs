import React, {useEffect, useState} from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../Redux/auth/sagas";
import Sidebar from "../components/Sidebar";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

    return (
      <Route
        {...rest}
        render={(props) =>
          isLogin() ? (
            <>
              <Sidebar />
              <main className="content">
                <Component {...props} />
              </main>
            </>
          ) : (
            <Redirect to="/" />
          )
        }
      />
    );
};

export default PrivateRoute;
