import React from 'react';
import { Redirect } from 'react-router-dom';

// context
import { UserConsumer } from '../context/User';

// route paths
import * as paths from './paths';

// checks if user is authorised to view the component
const withAuthorisation = (ComposedComponent, authRequired, roleRequired) => {
  function Authorisation(props) {
    return (
      <UserConsumer>
        {function(context) {
          if (authRequired && !context.user) { // must be logged in to view
            return <Redirect to={paths.logIn} />;
          } else if (!authRequired && context.user) { // must be logged out to view
            return <Redirect to={paths.home} />;
          } else { // authorisation granted
            return <ComposedComponent {...props} />;
          }
        }}
      </UserConsumer>
    );
  }
  return Authorisation;
}

export default withAuthorisation;