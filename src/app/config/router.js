import React from "react";
import { BrowserRouter as Router, Redirect, Route, Link } from "react-router-dom";
import { appPath } from './settings';

// hoc
import HeadHOC from '../shared/components/HOC_Head';
import withAuthorisation from '../components/auth/hocAuthorisation';
//components
import withAuthentication from '../components/auth/hocAuthentication';

// components
import Login from '../login/components/Login';
import Forgot from '../login/components/Forgot';
import Register from '../login/components/Register';


//router
const routes = (
  <Router>
    <div>
      <Route exact path={appPath + "/"} component={withAuthorisation(Login, true)} />
      <Route exact path={appPath + "/login"} component={withAuthorisation(Login, false)} />
      <Route path={appPath + "/login/forgotten"} component={withAuthorisation(Forgot, false)} />
      <Route path={appPath + "/register"} component={HeadHOC(Register, "Register")} />
    </div>
  </Router>
);

export default routes;