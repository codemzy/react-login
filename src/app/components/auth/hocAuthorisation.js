import React from 'react';
import { Redirect } from 'react-router-dom';
import { appPath } from '../../config/settings';

// context for user state
import { UserContext } from '../../config/context';

// checks if user is authorised to view the component
const withAuthorisation = (ComposedComponent, authRequired, roleRequired) => { 
  function Authorisation(props) {
    return (
      <UserContext.Consumer>
        {function(user) {
          if (authRequired && !user) { // must be logged in to view
            return <Redirect to={appPath + "/login"} />;
          } else if (!authRequired && user) { // must be logged out to view
            return <Redirect to={appPath + "/"} />;
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