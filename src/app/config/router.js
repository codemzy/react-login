import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { appPath } from './settings';

// hoc
import Head from '../shared/components/HOC_Head';

// components
import Login from '../login/components/Login';
import Forgot from '../login/components/Forgot';
import Register from '../login/components/Register';

//router
const routes = (
  <Router>
    <div>
      <Route exact path={appPath + "/"} component={Head(Login, "Log in")} />
      <Route exact path={appPath + "/login"} component={Head(Login, "Log in")} />
      <Route path={appPath + "/login/forgotten"} component={Head(Forgot, "Forgotten Password")} />
      <Route path={appPath + "/register"} component={Head(Register, "Register")} />
    </div>
  </Router>
);

export default routes;