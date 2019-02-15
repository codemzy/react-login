import React from "react";
import { BrowserRouter as Router, Redirect, Route, Link } from "react-router-dom";
import { appPath } from './settings';

// hoc
import HeadHOC from '../shared/components/HOC_Head';
import AccessHOC from '../components/auth/HOC_Access';

// components
import Login from '../login/components/Login';
import Forgot from '../login/components/Forgot';
import Register from '../login/components/Register';

// protected route
function PrivateRoute ({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

// checks if user is auth'd 
const AuthRoute = ({component: Component, ...rest }) => { 
  let isLoading = false;
  let isAuthenticated = false;
  if(isLoading) {
     return <div>Loading...</div>
  } else if(!isAuthenticated) {
     return <Redirect to="/login" />
  } else {
     return <Component {...this.props} /> 
  }
} 

//router
const routes = (
  <Router>
    <div>
      <Route exact path={appPath + "/"} component={AccessHOC(Login, "Log in")} />
      <Route exact path={appPath + "/login"} component={HeadHOC(Login, "Log in")} />
      <Route path={appPath + "/login/forgotten"} component={HeadHOC(Forgot, "Forgotten Password")} />
      <Route path={appPath + "/register"} component={HeadHOC(Register, "Register")} />
    </div>
  </Router>
);

export default routes;