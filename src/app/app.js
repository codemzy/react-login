import React from 'react';
import ReactDOM from 'react-dom';

import routes from './config/router'; // app routes

// context providers
import { UserProvider } from './context/User';

// App
const App = () => (
  <UserProvider>
    {routes}
  </UserProvider>
);

// render App
ReactDOM.render(<App />, document.getElementById('app'));