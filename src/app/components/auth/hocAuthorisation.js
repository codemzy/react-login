import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// context
import { UserContext } from '../../config/context';

// hoc
const withAuthorisation = (ComposedComponent, authRequired, roleRequired) => { 
  function Authorisation(props) {
    return (
      <UserContext.Consumer>
        {function(user) {
          if (authRequired && !user) { // must be logged in to view
            return <Redirect to="/login" />;
          } else if (!authRequired && user) { // must be logged out to view
            return <Redirect to="/" />;
          } else { // authorisation granted
            return <ComposedComponent {...props} />;
          }
        }}
      </UserContext.Consumer>
    );
  }
  return Authorisation;
}

export default withAuthorisation;