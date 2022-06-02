import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";

const PrivateRoute = ({ component: Component, ...props }) => {
  const userDetail = useSelector((state) => state.auth);
  if (userDetail.token) {
    return (
      <Route>
        <Sidebar />
        <main className="content">
          <Component {...props} />
        </main>
      </Route>
    );
  } 
  else {
    return <Redirect to="/" />;
  }
};

export default PrivateRoute;
