import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { appPath } from './settings';

// hoc
import Head from '../shared/components/HOC_Head';

// components
import Login from '../login/components/Login';
import Register from '../login/components/Register';

//router
const routes = (
  <Router>
    <div>
      <Route exact path={appPath + "/"} component={Head(Login, "Log in")} />
      <Route path={appPath + "/login"} component={Head(Login, "Log in")} />
      <Route path={appPath + "/register"} component={Head(Register, "Register")} />
    </div>
  </Router>
);

export default routes;