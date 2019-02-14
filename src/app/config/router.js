import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// components
import Login from '../login/components/Login';
import Register from '../login/components/Register';

//router
const routes = (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  </Router>
);

export default routes;