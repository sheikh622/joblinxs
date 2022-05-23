import React, { ReactNode } from "react";
import { BiAlignLeft } from "react-icons/bi";
import { RoutePermittedRole } from "../shared/constants/AppConst";
import IntlMessages from "../@crema/utility/IntlMessages";

export interface RouterConfigData {
  id: string;
  title: any;
  messageId: string;
  icon?: string | ReactNode;
  type: "item" | "group" | "collapse" | "divider";
  children?: RouterConfigData[];
  permittedRole?: RoutePermittedRole;
  color?: string;
  url?: string;
  exact?: boolean;
  count?: number;
}

const routesConfig: RouterConfigData[] = [
  {
    id: "app",
    title: <IntlMessages id="sideNav.Dashboard" />,
    messageId: "Dashboard",
    type: "item",
    url: "/dashboard",

  },
  {
    id: "Users",
    title: "Users",
    messageId: "Users Management",
    type: "item",
    url: "/Users",
  },
  {
    id: "Categories",
    title: "Categories",
    messageId: "Categories Management",
    type: "item",
    url: "/Categories",
  },
  // {
  //   id: "JobManagement",
  //   title: "JobManagement",
  //   messageId: "Job Management",
  //   type: "item",
  //   url: "/JobManagement",
  // },
  // {
  //   id: "Invoice",
  //   title: <IntlMessages id="sideNav.Invoice" />,
  //   messageId: "Invoice",
  //   type: "item",
  //   url: "/Invoice",
  // },


];
export default routesConfig;
