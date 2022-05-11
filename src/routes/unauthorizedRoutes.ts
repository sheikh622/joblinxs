import React from "react";

export const unauthorizedRouteConfigs = [
  {
    path: "/signin",
    component: React.lazy(() => import("../pages/auth/Signin/index")),
  },
  // {
  //   path: "/signup",
  //   component: React.lazy(() => import("../pages/auth/Signup/index")),
  // },
  {
    path: "/forget-password",
    component: React.lazy(() => import("../pages/auth/ForgetPassword")),
  },
  {
    path: "/confirm-signup",
    component: React.lazy(() => import("../pages/auth/ConfirmSignupAwsCognito")),
  },
  {
    path: "/reset-password",
    component: React.lazy(() => import("../pages/auth/ResetPassword/ResetPage")),
  },
];
