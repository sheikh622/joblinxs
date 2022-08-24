import React from "react";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import viewProfile from "../components/viewProfile";
import ProviderProfile from "./profile/providerProfile";
import { Routes } from "../routes";
import PrivateRoute from "../utils/PrivateRoute";
import PublicRoute from "../utils/PublicRoute";
import Categories from "./category/categories";
import JobManagement from "./Job Management/jobManagement";
import CategoryManagement from "./category/categoryManagement";
//routes here
import DashboardOverview from "./dashboard/DashboardOverview";
import NewArrivalProvider from "./newArrivalProvider/newArrivalProvider";
import TopRatedProviders from "./newArrivalSeekers/newArrivalSeekers";
import Recommend from "./recommended/recommended";
import ForgotPassword from "./auths/ForgotPassword";
import NotFoundPage from "./auths/NotFound";
import ResetPassword from "./auths/ResetPassword";
import Signin from "./auths/Signin";
import Favourites from "./favourite/favourites";
import CreateJob from "./jobs/CreateJob";
import Applicants from "./jobs/applicants";
import LogHourDetails from "./jobs/logHourDetails";
import LogHours from "./jobs/logHours";
import Job from "./jobs/Job";
import Search from "./Search";
import EditProfile from "./profile/editProfile";
import Profile from "./profile/Profile";
import userDetail from "./user/userDetail";
import JobDetails from "./Job Management/jobDetails";
import UserManagement from "./user/userManagement";
import Users from "./user/users";
import editAdminProfile from "./AdminProfile/editAdminProfile";
import adminProfile from "./AdminProfile/adminProfile";
import MyJobDetails from "./jobs/myJobDetails";
import BusinessCategories from "./businessCategory/index"
import Settings from "./Settings/index"
import Chat from "./Chat/main"
import ReportManagement from "./Report Management";
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
        path={Routes.Chat.path}
        component={Chat}
      />
      <PrivateRoute
        exact
        path={Routes.DashboardOverview.path}
        component={DashboardOverview}
      />
      <PrivateRoute
        exact
        path={Routes.NewArrivalProvider.path}
        component={NewArrivalProvider}
      />
      <PrivateRoute
        exact
        path={Routes.TopRatedProviders.path}
        component={TopRatedProviders}
      />
      <PrivateRoute
        exact
        path={Routes.Recommended.path}
        component={Recommend}
      />

      <PrivateRoute exact path={Routes.Profile.path} component={Profile} />
      <PrivateRoute
        exact
        path={Routes.EditAdminProfile.path}
        component={editAdminProfile}
      />
      <PrivateRoute
        exact
        path={Routes.AdminProfile.path}
        component={adminProfile}
      />

      <PrivateRoute
        exact
        path={Routes.EditProfile.path}
        component={EditProfile}
      />
      <PrivateRoute exact path={Routes.Job.path} component={Job} />
      <PrivateRoute exact path={Routes.CreateJob.path} component={CreateJob} />
      <PrivateRoute exact path={Routes.UpdateJob.path} component={CreateJob} />
      <PrivateRoute
        exact
        path={Routes.Applicants.path}
        component={Applicants}
      />
      <PrivateRoute exact path={Routes.LogHours.path} component={LogHours} />
      <PrivateRoute exact path={Routes.LogHoursDetails.path} component={LogHourDetails} />

      <PrivateRoute
        exact
        path={Routes.Favourites.path}
        component={Favourites}
      />
       <PrivateRoute
        exact
        path={Routes.Settings.path}
        component={Settings}
      />
      <PrivateRoute
        exact
        path={Routes.Search.path}
        component={Search}
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
        path={Routes.Report_Management.path}
        component={ReportManagement}
      />
      <PrivateRoute
        exact
        path={Routes.BusinessCategory.path}
        component={BusinessCategories}
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
      <PrivateRoute
        exact
        path={Routes.DetailJob.path}
        component={MyJobDetails}
      />
      <PrivateRoute
        exact
        path={Routes.MyJobDetail.path}
        component={MyJobDetails}
      />

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
      <PrivateRoute
        exact
        path={Routes.JobDetails.path}
        component={JobDetails}
      />
      <Redirect to={Routes.NotFound.path} />
    </Switch>
  </BrowserRouter>
);
