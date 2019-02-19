import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// hoc
import withAuthentication from './hocAuthentication';

// export
const withAuthorisation = (ComposedComponent, authRequired, roleRequired) => { 
  function Authorisation(props) {
    if (authRequired && !props.user) { 
      return <Redirect to="/login" />;
    } else {
      return <ComposedComponent {...props} />;
    }
  }
  
  return withAuthentication(Authorisation);
}

export default withAuthorisation;