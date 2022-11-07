import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, restricted, ...props }) => {
  const userDetail = useSelector((state) => state.auth);

  if (userDetail.token) {
    return <Redirect to={userDetail?.Auther?.role?.name == "Admin" ? "/adminDashBoard" : "/dashboard"} />;
  }
  else {
    return (
      <>
        <Component {...props} />
      </>
    );
  }
};

export default PublicRoute;
