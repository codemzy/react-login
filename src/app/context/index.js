import React from 'react';

// consumers
import { UserConsumer } from './User';

// -------------- CONTEXT FUNCTIONS -------------- //

// hoc for adding a context to a component as a consumer
export const hocContextConsumer = function(ComposedComponent, ContextConsumer, name) {
  return function (props) {
    return (
      <ContextConsumer>
        {context => {
          let newContext = { [name]: context };
          return <ComposedComponent {...newContext} {...props} />;
        }}
      </ContextConsumer>
    );
  }
}

// function to add multiple contexts as props
export const getContext = function(contexts = {}) {
  return function(Component) {
    if (contexts.user) {
      Component = hocContextConsumer(Component, UserConsumer, "userContext");
    }
    return Component;
  }
}