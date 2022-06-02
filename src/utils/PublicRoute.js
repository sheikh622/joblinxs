import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, restricted, ...props }) => {
  const userDetail = useSelector((state) => state.auth);

  useEffect(() => {
    console.log('90pojk', userDetail.token)
  }, []);

  if (userDetail.token) {
    return <Redirect to="/dashboard" />;
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
