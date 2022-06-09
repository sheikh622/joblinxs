import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

import Signin from "./examples/Signin";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./examples/ResetPassword";
import NotFoundPage from "./examples/NotFound";
import Job from "./jobs/Job";
import CreateJob from "./jobs/CreateJob";

//routes here
import DashboardOverview from "./dashboard/DashboardOverview";
import Profile from "./profile/Profile";
import PrivateRoute from "../utils/PrivateRoute";
import PublicRoute from "../utils/PublicRoute";
import Favourites from "./favourite/favourites";
import EditProfile from "./profile/editProfile";
import JobDetail from "../components/JobDetail";
import ProviderProfile from "../components/providerProfile";
import UserManagement from "./user/userManagement";
import Categories from "./category/categories";
import CategoryManagement from "./category/categoryManagement";
import Users from "./user/users";
import userDetail from "./user/userDetail";


// import Upgrade from "./Upgrade";
// import Transactions from "./Transactions";
// import BootstrapTables from "./tables/BootstrapTables";
// import Signup from "./examples/Signup";
// import Lock from "./examples/Lock";
// import ServerError from "./examples/ServerError";
// import Accordion from "./components/Accordion";
// import Alerts from "./components/Alerts";
// import Badges from "./components/Badges";
// import Breadcrumbs from "./components/Breadcrumbs";
// import Buttons from "./components/Buttons";
// import Forms from "./components/Forms";
// import Modals from "./components/Modals";
// import Navs from "./components/Navs";
// import Navbars from "./components/Navbars";
// import Pagination from "./components/Pagination";
// import Popovers from "./components/Popovers";
// import Progress from "./components/Progress";
// import Tables from "./components/Tables";
// import Tabs from "./components/Tabs";
// import Tooltips from "./components/Tooltips";
// import Toasts from "./components/Toasts";

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

      <PrivateRoute
        exact
        path={Routes.EditProfile.path}
        component={EditProfile}
      />
      <PrivateRoute exact path={Routes.Job.path} component={Job} />

      <PrivateRoute exact path={Routes.CreateJob.path} component={CreateJob} />
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

      <PrivateRoute exact path={Routes.Users.path} component={Users} />

      <PrivateRoute
        exact
        path={Routes.UserManagement.path}
        component={UserManagement}
      />
      <PrivateRoute exact path={Routes.DetailJob.path} component={JobDetail} />
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

      {/* <PrivateRoute
        exact
        path={Routes.BootstrapTables.path}
        component={BootstrapTables}
      />
      <PrivateRoute exact path={Routes.Upgrade.path} component={Upgrade} />

      <PrivateRoute
        exact
        path={Routes.Transactions.path}
        component={Transactions}
      />
      <PublicRoute
        exact
        path={Routes.ServerError.path}
        component={ServerError}
      />
      <PublicRoute exact path={Routes.Lock.path} component={Lock} />
      <PublicRoute
        restricted={false}
        exact
        path={Routes.Signup.path}
        component={Signup}
      />
      <PrivateRoute exact path={Routes.Accordions.path} component={Accordion} />
      <PrivateRoute exact path={Routes.Alerts.path} component={Alerts} />
      <PrivateRoute exact path={Routes.Badges.path} component={Badges} />
      <PrivateRoute
        exact
        path={Routes.Breadcrumbs.path}
        component={Breadcrumbs}
      />
      <PrivateRoute exact path={Routes.Buttons.path} component={Buttons} />
      <PrivateRoute exact path={Routes.Forms.path} component={Forms} />
      <PrivateRoute exact path={Routes.Modals.path} component={Modals} />
      <PrivateRoute exact path={Routes.Navs.path} component={Navs} />
      <PrivateRoute exact path={Routes.Navbars.path} component={Navbars} />
      <PrivateRoute
        exact
        path={Routes.Pagination.path}
        component={Pagination}
      />
      <PrivateRoute exact path={Routes.Popovers.path} component={Popovers} />
      <PrivateRoute exact path={Routes.Progress.path} component={Progress} />
      <PrivateRoute exact path={Routes.Tables.path} component={Tables} />
      <PrivateRoute exact path={Routes.Tabs.path} component={Tabs} />
      <PrivateRoute exact path={Routes.Tooltips.path} component={Tooltips} />
      <PrivateRoute exact path={Routes.Toasts.path} component={Toasts} /> */}

    </Switch>
  </BrowserRouter>
);
