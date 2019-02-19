import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// export
const withAuthorisation = (ComposedComponent, authRequired, roleRequired) => { 
  function Authorisation(props) {
    if (authRequired && !props.user) { // must be logged in to view
      return <Redirect to="/login" />;
    } else if (!authRequired && props.user) { // must be logged out to view
      return <Redirect to="/" />;
    } else { // authorisation granted
      return <ComposedComponent {...props} />;
    }
  }
  
  return Authorisation;
}

export default withAuthorisation;