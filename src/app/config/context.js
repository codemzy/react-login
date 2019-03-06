import React from 'react';

// user context
export const UserContext = React.createContext({
  user: false,
  updateUser: () => {},
});