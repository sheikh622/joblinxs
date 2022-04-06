import React from "react";
import { Redirect } from "react-router-dom";
import { initialUrl } from "../shared/constants/AppConst";

export const errorPagesConfigs = [
  {
    path: "/error-pages/error-401",
    component: React.lazy(() => import("../pages/errorPages/Error401")),
  },
  {
    path: "/error-pages/error-403",
    component: React.lazy(() => import("../pages/errorPages/Error403")),
  },
  {
    path: "/error-pages/error-404",
    component: React.lazy(() => import("../pages/errorPages/Error404")),
  },
  {
    path: "/error-pages/error-500",
    component: React.lazy(() => import("../pages/errorPages/Error500")),
  },
  {
    path: "/error-pages/error-503",
    component: React.lazy(() => import("../pages/errorPages/Error503")),
  },
  {
    path: "/error-pages/coming-soon",
    component: React.lazy(() => import("../pages/errorPages/ComingSoon")),
  },
  {
    path: "/error-pages/maintenance",
    component: React.lazy(() => import("../pages/errorPages/Maintenance")),
  },
  {
    path: "/",
    exact: true,
    component: () => {
      return <Redirect to={initialUrl} />;
    },
  },
];
