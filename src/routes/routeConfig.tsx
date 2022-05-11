import { unauthorizedRouteConfigs } from "./unauthorizedRoutes";
import { initialUrl } from "shared/constants/AppConst";
import Error403 from "../pages/errorPages/Error403";
import React from "react";
import { errorPagesConfigs } from "./errorPagesRoutes";
import { authorizedRouteConfigs } from "./authorizedRoutes";


const unAuthorizedStructure = {
  fallbackPath: initialUrl,
  routes: unauthorizedRouteConfigs,
};

const authorizedStructure = {
  fallbackPath: "/signin",
  unAuthorizedComponent: <Error403 />,
  routes: [...authorizedRouteConfigs],
};
const anonymousStructure = {
  routes: errorPagesConfigs,
};

export { authorizedStructure, unAuthorizedStructure, anonymousStructure };
