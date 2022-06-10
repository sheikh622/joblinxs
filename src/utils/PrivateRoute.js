import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
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
