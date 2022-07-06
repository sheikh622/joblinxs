import React from "react";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import JobDetail from "../components/JobDetail";
import ProviderProfile from "./profile/providerProfile";
import { Routes } from "../routes";
import PrivateRoute from "../utils/PrivateRoute";
import PublicRoute from "../utils/PublicRoute";
import Categories from "./category/categories";
import JobManagement from "./Job Management/jobManagement"
import CategoryManagement from "./category/categoryManagement";
//routes here
import DashboardOverview from "./dashboard/DashboardOverview";
import ForgotPassword from "./auths/ForgotPassword";
import NotFoundPage from "./auths/NotFound";
import ResetPassword from "./auths/ResetPassword";
import Signin from "./auths/Signin";
import Favourites from "./favourite/favourites";
import CreateJob from "./jobs/CreateJob";
import Applicants from "./jobs/applicants";
import Job from "./jobs/Job";
import EditProfile from "./profile/editProfile";
import Profile from "./profile/Profile";
import userDetail from "./user/userDetail";
import UserManagement from "./user/userManagement";
import Users from "./user/users";
import editAdminProfile from "./AdminProfile/editAdminProfile";
import adminProfile from "./AdminProfile/adminProfile";
import MyJobDetails from "./jobs/myJobDetails";
// changes merge
export default () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute
        exact
        path={Routes.ForgotPassword.path}
        component={ForgotPassword}
      />
      <PublicRoute
        exact
        path={Routes.ResetPassword.path}
        component={ResetPassword}
      />
      <PublicRoute exact path={Routes.NotFound.path} component={NotFoundPage} />
      <PublicRoute exact path={Routes.Signin.path} component={Signin} />

      <PrivateRoute
        exact
        path={Routes.DashboardOverview.path}
        component={DashboardOverview}
      />

      <PrivateRoute exact path={Routes.Profile.path} component={Profile} />
      <PrivateRoute exact path={Routes.EditAdminProfile.path} component={editAdminProfile} />
      <PrivateRoute exact path={Routes.AdminProfile.path} component={adminProfile} />
      
      <PrivateRoute
        exact
        path={Routes.EditProfile.path}
        component={EditProfile}
      />
      <PrivateRoute exact path={Routes.Job.path} component={Job} />

      <PrivateRoute exact path={Routes.CreateJob.path} component={CreateJob} />
      <PrivateRoute exact path={Routes.UpdateJob.path} component={CreateJob} />
      <PrivateRoute exact path={Routes.Applicants.path} component={Applicants} />

      <PrivateRoute
        exact
        path={Routes.Favourites.path}
        component={Favourites}
      />

      <PrivateRoute
        exact
        path={Routes.Categories.path}
        component={Categories}
      />
      <PrivateRoute
        exact
        path={Routes.Categories_Management.path}
        component={CategoryManagement}
      />
      <PrivateRoute
        exact
        path={Routes.Job_Management.path}
        component={JobManagement}
      />

      <PrivateRoute exact path={Routes.Users.path} component={Users} />

      <PrivateRoute
        exact
        path={Routes.UserManagement.path}
        component={UserManagement}
      />
      <PrivateRoute exact path={Routes.DetailJob.path} component={MyJobDetails} />
      {/* <PrivateRoute exact path={Routes.MyJobDetail.path} component={MyJobDetails} /> */}
      
      <PrivateRoute
        exact
        path={Routes.DetailProvider.path}
        component={ProviderProfile}
      />
      <PrivateRoute
        exact
        path={Routes.UserDetail.path}
        component={userDetail}
      />
      <Redirect to={Routes.NotFound.path} />
    </Switch>
  </BrowserRouter>
);
