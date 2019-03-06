import React from "react";
import { BrowserRouter as Router, Redirect, Route, Link } from "react-router-dom";
import { appPath } from './settings';

// hoc
import HeadHOC from '../components/hocHead';
import withAuthorisation from '../components/auth/hocAuthorisation';

// components
import Login from '../components/login/Login';
import Forgot from '../components/login/Forgot';
import Register from '../components/login/Register';
import Dashboard from '../components/account/Dashboard';
import Account from '../components/account/Account';
import Page from '../components/feature/Page';


//router
const routes = (
  <Router>
    <div>
      <Route exact path={appPath + "/"} component={withAuthorisation(Dashboard, true)} />
      <Route exact path={appPath + "/account"} component={withAuthorisation(Account, true)} />
      <Route path="/page/:num" render={({ props, match }) => withAuthorisation(Page, true)({...props, title: "Page " + match.params.num})}/>
      <Route exact path={appPath + "/login"} component={withAuthorisation(Login, false)} />
      <Route path={appPath + "/login/forgotten"} component={withAuthorisation(Forgot, false)} />
      <Route path={appPath + "/register"} component={withAuthorisation(Register, false)} />
    </div>
  </Router>
);

export default routes;