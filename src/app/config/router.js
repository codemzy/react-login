import React from "react";
import { BrowserRouter as Router, Redirect, Route, Link } from "react-router-dom";
import { appPath } from './settings';

// hoc
import HeadHOC from '../shared/components/HOC_Head';
import withAuthorisation from '../components/auth/hocAuthorisation';

// components
import Login from '../login/components/Login';
import Forgot from '../login/components/Forgot';
import Register from '../login/components/Register';


//router
const routes = (
  <Router>
    <div>
      <Route exact path={appPath + "/"} component={withAuthorisation(Login, true)} />
      <Route exact path={appPath + "/login"} component={HeadHOC(Login, "Log in")} />
      <Route path={appPath + "/login/forgotten"} component={HeadHOC(Forgot, "Forgotten Password")} />
      <Route path={appPath + "/register"} component={HeadHOC(Register, "Register")} />
    </div>
  </Router>
);

export default routes;