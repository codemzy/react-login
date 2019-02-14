import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// base path if app is served in url directory
export const basePath = "";

// components
import Login from '../login/components/Login';
import Register from '../login/components/Register';

//router
const routes = (
  <Router>
    <div>
      <Route exact path={basePath + "/"} component={Login} />
      <Route path={basePath + "/login"} component={Login} />
      <Route path={basePath + "/register"} component={Register} />
    </div>
  </Router>
);

export default routes;