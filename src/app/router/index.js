import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// route paths
import * as paths from './paths';

// hoc
import withAuthorisation from './hocAuthorisation';

// components
import Login from '../components/login/Login';
import Forgot from '../components/login/Forgot';
import Register from '../components/login/Register';
import Dashboard from '../components/feature/Dashboard';
import Account from '../components/account/Account';
import Logout from '../components/account/Logout';
import Page from '../components/feature/Page';


//router
const routes = (
  <Router>
    <div>
      <Route exact path={paths.home} component={withAuthorisation(Dashboard, true)} />
      <Route exact path={paths.account} component={withAuthorisation(Account, true)} />
      <Route path={paths.page + "/:num"} render={({ props, match }) => withAuthorisation(Page, true)({...props, title: "Page " + match.params.num})}/>
      <Route path={paths.logOut} component={withAuthorisation(Logout, true)} />
      <Route exact path={paths.logIn} component={withAuthorisation(Login, false)} />
      <Route path={paths.forgotPw} component={withAuthorisation(Forgot, false)} />
      <Route path={paths.register} component={withAuthorisation(Register, false)} />
    </div>
  </Router>
);

export default routes;